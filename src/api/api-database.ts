import firebase from "../firebase/firebase"
import { IInventory } from "../interface/database"
import { AlertifyStatusEnum } from "../types/types"
import { showAlert } from "../utils/showAlert"

export const databaseAPI = {
  getPlaces() {
    return firebase
      .firestore()
      .collection("places")
      .get()
      .then((response: any) => {
        return response.docs.map((x: any) => ({
          id: x.id,
          data: x.data(),
          parts: x.data().parts && x.data().parts.map((part: any) => part.id),
        }))
      })
      .catch(() =>
        showAlert(AlertifyStatusEnum.error, "Не удалось получить список мест")
      )
  },
  getInventory() {
    return firebase
      .firestore()
      .collection("inventory")
      .get()
      .then((response: any) => {
        return response.docs.map((x: any) => ({
          id: x.id,
          data: x.data(),
          placeId: x.data().place
            ? x.data().place?.id
            : "Accidentally created in the database x.data().place === undefined", // my bad
        }))
      })
      .catch(() =>
        showAlert(
          AlertifyStatusEnum.error,
          "Не удалось получить список оборудования"
        )
      )
  },
  createInventory(name: string, count: number, id: string) {
    let filestore = firebase.firestore()
    return filestore
      .collection("inventory")
      .doc()
      .set({
        name: name,
        count: count,
        place: filestore.collection("place").doc(id),
      })
      .then(() => {})
      .catch(() => showAlert(AlertifyStatusEnum.error, "Не удалось добавить"))
  },
  deleteInventory(id: string) {
    return firebase
      .firestore()
      .collection("inventory")
      .doc(id)
      .delete()
      .then(() => {})
      .catch(() => showAlert(AlertifyStatusEnum.error, "Не удалось удалить"))
  },
  updateInventory(inventory: IInventory) {
    let filestore = firebase.firestore()
    return filestore
      .collection("inventory")
      .doc(inventory.id)
      .set({
        count: inventory.count,
        placeId: filestore.collection("place").doc(inventory.placeId),
        name: inventory.name,
      })
      .then(() => {})
      .catch(() => showAlert(AlertifyStatusEnum.error, "Не удалось обновить"))
  },
}
