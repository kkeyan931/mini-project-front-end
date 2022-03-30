<template>
  <form @submit="onSubmit">
    <fieldset :disabled="showMarksEditButton">
      <span
        style="
          float: right;
          display: inline-block;
          padding: 10px 10px;
          background: red;
          color: white;
          font-size: 20px;
        "
        @click="
          toggleEditMarks(null);
          showMarksEditButton == false ? toggleMarksEditButton() : () => {};
        "
        >close</span
      >

      <div class="contentform">
        <div class="leftcontact">
          <div
            v-for="(value, key) in currentEditStudentMarks.marks"
            :key="value + key"
            class="form-group"
          >
            <p>{{ key }}<span>*</span></p>
            <span class="icon-case"><i class="fa fa-book"></i></span>
            <input
              v-model="marks[key]"
              type="text"
              :name="key"
              :id="key"
              data-rule="required"
              :placeholder="value"
            />
            <div class="validation"></div>
          </div>
        </div>
      </div>
    </fieldset>
    <input
      v-if="showMarksEditButton"
      class="bouton-contact"
      type="button"
      value="Edit"
      @click="toggleMarksEditButton"
    />
    <input v-else class="bouton-contact" type="submit" value="submit" />
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MarksDetailsExpanded",
  data() {
    return {
      marks: {},
      enrolledSubjects: [],
      rollNumber: "",
      email: "",
      department: "",
      fullName: "",
      phone: "",
    };
  },
  computed: mapGetters([
    "currentEditStudentMarks",
    "showMarksEditButton",
    "allStudentsDetails",
  ]),
  methods: {
    ...mapActions([
      "fetchStudentsDetails",
      "toggleEditMarks",
      "toggleMarksEditButton",
      "updateStudent",
    ]),
    async onSubmit(e) {
      e.preventDefault();
      const updatedStudent = {
        id: this.currentEditStudentMarks.id,
        marks:
          Object.keys(this.marks).length === 0
            ? this.currentEditStudentMarks.marks
            : this.marks,
        enrolledSubjects: this.currentEditStudentMarks.enrolledSubjects,
        rollNumber: this.currentEditStudentMarks.rollNumber,
        email: this.currentEditStudentMarks.email,
        department: this.currentEditStudentMarks.department,
        fullName: this.currentEditStudentMarks.fullName,
        phone: this.currentEditStudentMarks.phone,
      };
      await this.updateStudent(updatedStudent);
      await this.fetchStudentsDetails();
      this.toggleEditMarks(null);
      this.toggleMarksEditButton();
      this.marks = [];
    },
  },
};
</script>

<style>
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
  font-size: 18px;
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