export async function uploadFile(file: File) {
  const baseUrl = import.meta.env.VITE_SERVER_URL ;
  const uploadUrl = baseUrl + "upload/";
  const formData = new FormData();
  formData.append("file", file);
  const options = {
    method: "POST",
    body: formData,
  };
  const response = await fetch(uploadUrl, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
