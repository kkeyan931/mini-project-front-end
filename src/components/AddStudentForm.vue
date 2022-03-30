<template>
  <form @submit="onSubmit">
    <div class="contentform">
      <div class="leftcontact">
        <div class="form-group">
          <p>Roll Number<span>*</span></p>
          <span class="icon-case"><i class="fa fa-male"></i></span>
          <input
            v-model="rollNumber"
            type="text"
            name="name"
            id="name"
            data-rule="required"
          />
          <div class="validation"></div>
        </div>

        <div class="form-group">
          <p>E-mail <span>*</span></p>
          <span class="icon-case"><i class="fa fa-envelope"></i></span>
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            data-rule="email"
          />
          <div class="validation"></div>
        </div>

        <div class="form-group">
          <p>Department <span>*</span></p>
          <span class="icon-case"><i class="fa fa-map-marker"></i></span>
          <input
            v-model="department"
            type="text"
            name="department"
            id="department"
            data-rule="required"
          />
          <div class="validation"></div>
        </div>
      </div>

      <div class="rightcontact">
        <div class="form-group">
          <p>Full Name <span>*</span></p>
          <span class="icon-case"><i class="fa fa-building"></i></span>
          <input
            v-model="fullName"
            type="text"
            name="fullname"
            id="fullname"
            data-rule="required"
          />
          <div class="validation"></div>
        </div>

        <div class="form-group">
          <p>Phone number <span>*</span></p>
          <span class="icon-case"><i class="fa fa-phone"></i></span>
          <input
            v-model="phone"
            type="text"
            name="phone"
            id="phone"
            data-rule="maxlen:10"
          />
          <div class="validation"></div>
        </div>
        <div>
          <p>Enrolled Subjects <span>*</span></p>
          <VueMultiselect
            :multiple="true"
            v-model="enrolledSubjects"
            :options="allSubjectsTitle"
          >
          </VueMultiselect>
          <div class="validation"></div>
        </div>
      </div>
    </div>
    <input class="bouton-contact" type="submit" value="Submit" />
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VueMultiselect from "vue-multiselect";
export default {
  name: "AddStudentForm",
  components: {
    VueMultiselect,
  },
  data() {
    return {
      enrolledSubjects: [],
      rollNumber: "",
      email: "",
      department: "",
      fullName: "",
      phone: "",
    };
  },
  computed: mapGetters(["allSubjectsTitle"]),
  methods: {
    ...mapActions([
      "addStudent",
      "getAllSubjectsTitles",
      "fetchSubjectsDetails",
      "fetchStudentsDetails"
    ]),
    onSubmit(e) {
      e.preventDefault();
      let marksKeys={};
      for(let subject of this.enrolledSubjects){
          marksKeys[subject]="";
      }
      const newStudent = {
        marks : marksKeys,
        enrolledSubjects: this.enrolledSubjects,
        rollNumber: this.rollNumber,
        email: this.email,
        department: this.department,
        fullName: this.fullName,
        phone: this.phone,
      };
      this.addStudent(newStudent);
      this.$emit("submit-complete");
    },
  },
  async created() {
    await this.fetchSubjectsDetails();
    await this.getAllSubjectsTitles();
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css" scope>
body {
  margin: auto;
  background: #eaeaea;
  font-family: "Open Sans", sans-serif;
}

.info p {
  text-align: center;
  color: #999;
  text-transform: none;
  font-weight: 600;
  font-size: 15px;
  margin-top: 2px;
}

.info i {
  color: #f6aa93;
}
form h1 {
  font-size: 18px;
  background: #f6aa93 none repeat scroll 0% 0%;
  color: rgb(255, 255, 255);
  padding: 22px 25px;
  border-radius: 5px 5px 0px 0px;
  margin: auto;
  text-shadow: none;
  text-align: left;
}

form {
  border-radius: 5px;
  max-width: 700px;
  width: 100%;
  margin: 5% auto;
  background-color: #ffffff;
  overflow: hidden;
}

p span {
  color: #f00;
}

p {
  margin: 0px;
  font-weight: 500;
  line-height: 2;
  color: #333;
}

h1 {
  text-align: center;
  color: #666;
  text-shadow: 1px 1px 0px #fff;
  margin: 50px 0px 0px 0px;
}

input {
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #eee;
  margin-bottom: 15px;
  width: 75%;
  height: 40px;
  float: left;
  padding: 0px 15px;
}

a {
  text-decoration: inherit;
}

textarea {
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #eee;
  margin: 0;
  width: 75%;
  height: 130px;
  float: left;
  padding: 0px 15px;
}

.form-group {
  overflow: hidden;
  clear: both;
}

.icon-case {
  width: 35px;
  float: left;
  border-radius: 5px 0px 0px 5px;
  background: #eeeeee;
  height: 42px;
  position: relative;
  text-align: center;
  line-height: 40px;
}

i {
  color: #555;
}

.contentform {
  padding: 40px 30px;
}

.bouton-contact {
  background-color: green;
  color: #fff;
  text-align: center;
  width: 100%;
  border: 0;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
  margin-top: 40px;
  font-size: 18px;
}

.leftcontact {
  width: 49.5%;
  float: left;
  border-right: 1px dotted #ccc;
  box-sizing: border-box;
  padding: 0px 15px 0px 0px;
}

.rightcontact {
  width: 49.5%;
  float: right;
  box-sizing: border-box;
  padding: 0px 0px 0px 15px;
}

.validation {
  display: none;
  margin: 0 0 10px;
  font-weight: 400;
  font-size: 13px;
  color: #de5959;
}

#sendmessage {
  border: 1px solid #fff;
  display: none;
  text-align: center;
  margin: 10px 0;
  font-weight: 600;
  margin-bottom: 30px;
  background-color: #ebf6e0;
  color: #5f9025;
  border: 1px solid #b3dc82;
  padding: 13px 40px 13px 18px;
  border-radius: 3px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.03);
}

#sendmessage.show,
.show {
  display: block;
}
</style>