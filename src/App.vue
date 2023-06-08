<template>
  <div class="dashboard">
    <Header />
    <Toolbar :toggleForm="toggleForm" />
    <Team :users="users" :toggleForm="toggleForm" :fetchUsers="fetchUsers"/>
    <UserForm v-if="formActive" :toggleForm="toggleForm" :fetchUsers="fetchUsers" :userId = "userId"/>
    <main>

    </main>
  </div>
</template>

<script>
import {ref} from 'vue';
import Header from '@/components/Header';
import Toolbar from '@/components/Toolbar.vue';
import Team from '@/components/Team.vue';
import UserForm from '@/components/UserForm.vue';
import APIController from '@/Controllers/api';
export default {
  name: 'App',
  components: {
    Header,
    Toolbar,
    Team,
    UserForm   
  },
  setup(){
    const users = ref([]);

    const formActive = ref(false);
    
    const userId = ref(false); 

    const fetchUsers = async () => {
      users.value = await APIController.FetchUsers();
    }

    const toggleForm = (id = false) =>{
      formActive.value = !formActive.value;
      userId.value = false;
      if(id){
        userId.value = id;
      }
    }

    return {
      users,
      fetchUsers,
      formActive,
      toggleForm,
      userId
    }
  },

  mounted(){
    this.fetchUsers();
    
  }
}
</script>

<style>
 :root{
  --primary: #8A4CFC;
  --primary-alt: #702fe8;
  --light: #EEEEEE;
  --light-alt: #F8F8F8;
  --grey: #888888;
  --dark: #131A26;
 }
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
 }

 body{
  background-color: var(--light);
 }

 main{
  width: 100vh;
  overflow: hidden;
 }

 input, button{
  appearance: none;
  outline: none;
  border: none;
  background: none;
 }

 .button{
  display: inline-block;
  padding: 8px 16px;
  background-color: var(--primary);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.4s;
 }
 .button:hover{
  background-color: var(--primary-alt);
 }
 .button.button-outline{
  background-color: transparent;
  border: 2px solid var(--primary);
  padding: 6px 14px;
  color: var(--primary);
 }
 .button.button-outline:hover{
  color: #fff;
  background-color: var(--primary);
 }

 .button.button-small{
  padding: 4px 8px;
  font-size: 18px;
  font-weight: 600;
 }

 .button.button-alert{
  background-color: crimson;
 }

 .button-group{
  display: flex;
  margin: 0 8px;
 }

 .button-group.group-end{
  justify-content: flex-end;
 }

 .button-group .button{
  margin: 0px 8px;
 }
</style>
