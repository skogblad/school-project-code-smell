export async function getPodcasts() {
  return await fetch(
    import.meta.env.VITE_APP_API_STORAGE_LINK,
  )
    .then((data) => data.json())
    .then((json) => json)
    .catch((error) => {
      console.error("nått blev fel:", error);
      alert("Error! Ett fel har uppstått och SRs Humorprogram kan ej läsas in.");
      return null;
    });
}

export default getPodcasts;
