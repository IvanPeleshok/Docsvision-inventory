import firebase from "../firebase/firebase"
import { AlertifyStatusEnum } from "../types/types"
import { showAlert } from "../utils/showAlert"

export const dataBaseAPI = {
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
          placeId: x.data().place.id,
        }))
      })
      .catch(() =>
        showAlert(
          AlertifyStatusEnum.error,
          "Не удалось получить список оборудования"
        )
      )
  },
  addInventory(name: string, count: string, id: string) {
    return firebase
      .firestore()
      .collection("Inventory")
      .doc()
      .set({
        name,
        count,
        place: firebase.firestore().collection("place").doc(id),
      })
      .then(() => console.info("Done"))
      .catch(() => showAlert(AlertifyStatusEnum.error, "Не удалось добавить"))
  },
  deleteInventory(id: string) {
    return firebase
      .filestore()
      .collection("Inventory")
      .doc(id)
      .delete()
      .then(() => (response: any) => response)
      .catch(() => {})
  },
  updateInventory(id: string, count: string) {
    return firebase
      .firestore()
      .collection("inventory")
      .doc(id)
      .set({ count })
      .then(() => (response: any) => response)
      .catch(() => showAlert(AlertifyStatusEnum.error, "Не удалось обновить"))
  },
}
