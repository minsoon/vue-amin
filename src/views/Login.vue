<template>
  <v-layout align-center justify-center row fill-height>
    <v-card class="loginBox">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          name="name"
          :rules="nameRules"
          :counter="10"
          label="Name"
          required
        />
        <v-text-field
          v-model="password"
          name="password"
          :append-icon="pwShow ? 'visibility_off' : 'visibility'"
          :rules="[passwordRules.required, passwordRules.min]"
          :type="pwShow ? 'text' : 'password'"
          label="Password"
          hint="At least 8 characters"
          autocomplete="password"
          counter
          @click:append="pwShow = !pwShow"
        />
        <div class="submitBtn">
          <button
            type="button"
            @click="submit()"
            class="v-btn"
            name="submit"
          >
            <div class="v-btn__content">
              submit
            </div>
          </button>
          <v-btn
            @click="clear"
            name="clear"
          >
            clear
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-layout>
</template>

<script>
import auth from '@/auth';
import * as VForm from 'vuetify/es5/components/VForm';
import * as VTextField from 'vuetify/es5/components/VTextField';

export default {
  name: 'LoginTest',
  components: {
    ...VForm,
    ...VTextField
  },
  data () {
    return {
      msg: 'login',
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      pwShow: false,
      password: '',
      passwordRules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters'
      }
    };
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        auth.login({
          id: this.name,
          password: this.password
        }).then((data) => {
          var queryUrl = this.$route.query.redirect;
          if (queryUrl) return this.$router.push(queryUrl);
          this.$router.push({ name: 'List' });
        }).catch((error) => {
          alert('로그인 에러');
          /*
           * TODO : ERROR 처리는 어떻게 표현 할지 고민.
           *   - 알림 모듈 생성하여 관리?
           * */
        });
      } else {
        alert('id. pw 입력');
      }
    },
    clear () {
      // this.$refs.form.reset();
      this.name = '';
      this.password = '';
    }
  }
};
</script>

<style lang="less">
  @import '../less/mixin';
  .loginBox {
    padding:20px;
    width:80%;
  .submitBtn {
    text-align:center;
  }
  }
</style>



