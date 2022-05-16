import { ApiService } from "./api-service";

export class ResourceService extends ApiService {
  constructor() {
    super();
  }

  basePath = "http://localhost:3000";

  async updateResourceFromObject(resourceDTO) {
    const targetUrl = `/resources/${resourceDTO.id}`;
    const response = await this.put(targetUrl, resourceDTO);
    return response.data;
  }
  
  async deleteResourceById(id: number) {
    const targetUrl = `/resources/${id}`;
    const response = await this.delete(targetUrl, {});
    return response.data;
  }
}

export default new ResourceService();
