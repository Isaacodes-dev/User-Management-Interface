const API_BASE = "http://127.0.0.1:8000/api";

export default{
    FetchUsers: ()=>{
        return fetch(API_BASE + "/users/all")
        .then(response => response.json())
        .then(data =>{
            if(data.success){
               return data.response.users;
            }else{
                throw data.response.error;
            }
        })
        .catch(err =>{
            alert(err);
        })
    },
    FetchUser: id =>{
        if(id != null){
            return fetch(API_BASE + "/users/" + id)
            .then(response => response.json())
            .then(data =>{
                if(data.success){
                    return data.response.user;
                }else{
                    throw data.response.error;
                }
            })
            .catch(err =>{
                alert(err);
            })
        }
    },
    CreateUser: (name="", email="", password="")=>{
        if(
            name == "" ||
            email == "" ||
            password == ""
        ){
            return false;
        }
        return fetch(API_BASE + "/users/create", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        })
        .then(response =>response.json())
        .then(data => {
            if(data.success){
                return data.response.user;
            }else{
                throw data.response.error;
            }
        })
        .catch(err =>{
            alert(err);
        })
    },
    UpdateUser:(name="", email="", id="")=>{
        if(
            name == "" ||
            email == ""
        ){
            return false;
        }
        return fetch(API_BASE + "/users/update/" + id, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email})
        })
        .then(response =>response.json())
        .then(data => {
            if(data.success){
                return data.response.user;
            }else{
                throw data.response.error;
            }
        })
        .catch(err =>{
            alert(err);
        })
    },
    DeleteUser: id => {
        if(id != null){
            return fetch(API_BASE + "/users/delete/" + id,{
               method: "DELETE" 
            })
            .then(response =>response.json())
            .then(data => {
                if(data.success){
                    alert("User removed successfully")
                    return true;
                }else{
                    throw data.response.error;
                }
            })
            .catch(err =>{
                alert(err);
            })
        }
    }
}