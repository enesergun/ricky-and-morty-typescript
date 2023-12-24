import axios, { AxiosResponse, AxiosError } from "axios";

export interface LocationData {
  // Define the structure of your location data based on the actual API response
  // For example, you can use interfaces to define the structure
  // Example:
  // id: number;
  // name: string;
  // ...
  error: object;
}

export const getLocation = async (page: string | undefined | string[]): Promise<AxiosResponse<LocationData> | AxiosError<LocationData>> => {
  try {
    const config = {
      method: "post",
      url: "http://localhost:3000/api/locations",
      data: {page: page}
    };

    const response: AxiosResponse<LocationData> = await axios(config); // Explicitly define type

    
    return response;
  } catch (error) {
    // Explicitly specify the type of the error
    return error as AxiosError<LocationData>;
  }
};
