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
          counter
          @click:append="pwShow = !pwShow"
        />
        <div class="submitBtn">
          <v-btn
            :disabled="!valid"
            name="submit"
            @click="submit"
          >
            submit
          </v-btn>
          <v-btn @click="clear">clear</v-btn>
        </div>
      </v-form>
    </v-card>
  </v-layout>
</template>

<script>
  import auth from '@/auth';

  export default {
    name: 'LoginTest',
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
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      };
    },
    created () {
      console.log('-');
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          var $router = this.$router;
          auth.login({
            id: this.name,
            password: this.password
          }).then(function () {
            $router.push('main');
          }, function () {
            alert('로그인 에러');
            /*
             * TODO : ERROR 처리는 어떻게 표현 할지 고민.
             *   - 알림 모듈 생성하여 관리?
             * */
          });
        }
      },
      clear () {
        this.$refs.form.reset()
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



