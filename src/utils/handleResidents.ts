import { getCharacter } from "@/actions/getCharacter";
import { getSingleLocation } from "@/actions/getSingleLocation";
import extractCharacterIds from "@/helpers/extractCharacterIds";
import { setCharactersInResidentsList } from "@/redux/features/characters/charactersSlice";

const handleResidents = (baseUrl: string | null, character: any, dispatch: any) => {
    const getResidents = () => {
      let splittedLocationURL = character?.location?.url?.split("/");
      const locationId = splittedLocationURL[splittedLocationURL?.length - 1];
      getLocationWithId(locationId);
    };
  
    const getLocationWithId = async (locationId: any) => {
      const response: any = await getSingleLocation(
        baseUrl,
        locationId
      );
  
      const extractedIds = extractCharacterIds(response.data.residents);
  
      const residentCharacters: any =
        response.data.residents.length > 0
          ? await getCharacter( baseUrl, extractedIds)
          : { data: [] };
      dispatch(setCharactersInResidentsList(residentCharacters.data));
    };
    getResidents();
}

export default handleResidents;