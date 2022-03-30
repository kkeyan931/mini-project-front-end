<template>
  <form @submit="onSubmit">
    <fieldset :disabled="showSubjectEditButton">
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
          toggleEditSubject(null);
          showSubjectEditButton == false ? toggleSubjectEditButton() : () => {};
        "
        >close</span
      >
      <div class="contentform">
        <div class="leftcontact">
          <div class="form-group">
            <p>Subject Code<span>*</span></p>
            <span class="icon-case"><i class="fa fa-at"></i></span>
            <input
              v-model="subjectCode"
              type="text"
              name="subjectCode"
              id="subjectCode"
              data-rule="required"
              :placeholder="
                currentEditSubject != null ? currentEditSubject.subjectCode : ''
              "
            />
            <div class="validation"></div>
          </div>

          <div class="form-group">
            <p>Credits<span>*</span></p>
            <span class="icon-case"><i class="fa fa-cog"></i></span>
            <input
              v-model="credits"
              type="text"
              name="credits"
              id="credits"
              data-rule="required"
              :placeholder="
                currentEditSubject != null ? currentEditSubject.credits : ''
              "
            />
            <div class="validation"></div>
          </div>

          <div class="form-group">
            <p>Semester <span>*</span></p>
            <span class="icon-case"><i class="fa fa-trophy"></i></span>
            <input
              v-model="semester"
              type="text"
              name="semester"
              id="semester"
              data-rule="required"
              :placeholder="
                currentEditSubject != null ? currentEditSubject.semester : ''
              "
            />
            <div class="validation"></div>
          </div>
        </div>
        <div class="rightcontact">
          <div class="form-group">
            <p>Subject Title <span>*</span></p>
            <span class="icon-case"><i class="fa fa-book"></i></span>
            <input
              v-model="subjectTitle"
              type="text"
              name="subjectTitle"
              id="subjectTitle"
              data-rule="required"
              :placeholder="
                currentEditSubject != null
                  ? currentEditSubject.subjectTitle
                  : ''
              "
            />
            <div class="validation"></div>
          </div>

          <div class="form-group">
            <p>Max Marks <span>*</span></p>
            <span class="icon-case"><i class="fa fa-tasks"></i></span>
            <input
              v-model="maxMarks"
              type="text"
              name="maxMarks"
              id="maxMarks"
              data-rule="maxlen:10"
              :placeholder="
                currentEditSubject != null ? currentEditSubject.maxMarks : ''
              "
            />
            <div class="validation"></div>
          </div>
        </div>
      </div>
    </fieldset>

    <input
      v-if="showSubjectEditButton"
      class="bouton-contact"
      type="button"
      value="Edit"
      @click="toggleSubjectEditButton"
    />
    <input v-else class="bouton-contact" type="submit" value="submit" />
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SubjectDetailsExpanded",
  data() {
    return {
      subjectCode: "",
      subjectTitle: "",
      credits: "",
      semester: "",
      maxMarks: "",
    };
  },
  computed: mapGetters([
    "currentEditSubject",
    "showSubjectEditButton",
    "allSubjectDetails",
  ]),

  methods: {
    ...mapActions([
      "addStudent",
      "toggleEditSubject",
      "fetchSubjectsDetails",
      "toggleSubjectEditButton",
      "updateSubject",
    ]),
    async onSubmit(e) {
      e.preventDefault();
      const updatedSubject = {
        id: this.currentEditSubject.id,
        subjectCode:
          this.subjectCode == ""
            ? this.currentEditSubject.subjectCode
            : this.subjectCode,
        subjectTitle:
          this.subjectTitle == ""
            ? this.currentEditSubject.subjectTitle
            : this.subjectTitle,
        credits:
          this.credits == "" ? this.currentEditSubject.credits : this.credits,
        semester:
          this.semester == ""
            ? this.currentEditSubject.semester
            : this.semester,
        maxMarks:
          this.maxMarks == ""
            ? this.currentEditSubject.maxMarks
            : this.maxMarks,
      };
      await this.updateSubject(updatedSubject);
      await this.fetchSubjectsDetails();
      this.toggleEditSubject(null);
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
  font-size:18px;
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