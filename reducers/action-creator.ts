import { Dispatch } from "redux";
import ResourceService from "@api/resource-service";
import {
  openErrorNotification,
  openSuccessNotification,
} from "@/components/notification/notification";
import { ResourceAction } from "./type";

export const ResourceActionCreators = {
  //...
  putComment:
    (comment: string, resourceId: number) =>
    async (dispatch: Dispatch<ResourceAction>) => {
      const resourceDTO = { id: resourceId, managerComment: comment };
      try {
        const response = await ResourceService.updateResourceFromObject(
          resourceDTO
        );
        dispatch(ResourceActionCreators.updateResource(response));
      } catch (e) {
        dispatch(ResourceActionCreators.setError(e.message));
      }
    },

  deleteUserfromTable:
    (resourceId: number) => async (dispatch: Dispatch<ResourceAction>) => {
      try {
        await ResourceService.deleteResourceById(resourceId);
        dispatch(ResourceActionCreators.deleteResource(resourceId));
        openSuccessNotification(
          "Удаление ...",
          "... был успешно удален из таблицы."
        );
      } catch (e) {
        openErrorNotification("Ошибка при попытке удаления", e.message);
        dispatch(ResourceActionCreators.setError(e.message));
      }
    },
};
