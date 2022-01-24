import {LABS_URL} from "../vars";

export function uploadLab(lab, callBack) {
    let formData = new FormData();
    formData.append("file", lab.files[0]);

    fetch(LABS_URL, {
            method: "POST",
            body: formData
        }
    ).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
        .finally(() => callBack())
}