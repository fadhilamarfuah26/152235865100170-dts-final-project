import rapid from "../api/rapid";

const getAll = () => {
  return rapid.get("/hiragana");
};
const get = id => {
  return rapid.get(`/hiragana/${id}`);
};
const findByTitle = romaji => {
    return rapid.get(`/tutorials?romaji=${romaji}`);
  };

  const ServiceRapid = {getAll, get, findByTitle};
  export default ServiceRapid;