import * as web3storage from '../services/web3Storage'

export const onFilePicked = (event) => {
  const files = event.target.files
  window.filelist = files
  let data = []
  console.dir(files)
  for (let i = 0; i < files.length; i += 1) {
    console.log("File", files[i])
    data.push(URL.createObjectURL(files[i]))
  }
  window.my_thumbs = data
}

export const onUploadFile = async () => {
  let { cid, fileName, fileUrl } = await web3storage.default.storeWithProgress(window.filelist)
  let imageUrl = fileUrl;
  console.log(">> file cid: ", cid);
  console.log(">> file names: ", fileName);
  console.log(">> imageUrl: ", imageUrl);

  window.my_thumbs = null
  window.filelist = null
}