<template>
  <v-container>
    <div class="guideBox">
      <div class="tit"><span>BUTTON</span></div>
      <div class="box">
        <v-btn>Normal</v-btn>
        <v-btn color="success">Success</v-btn>
        <v-btn color="error">Error</v-btn>
        <v-btn color="warning">Warning</v-btn>
        <v-btn color="primary">Primary</v-btn>
        <v-btn color="info">Info</v-btn>

        <br />
        <br />

        <v-btn flat>Normal</v-btn>
        <v-btn flat color="success">Success</v-btn>
        <v-btn flat color="error">Error</v-btn>
        <v-btn flat color="warning">Warning</v-btn>
        <v-btn flat color="primary">Primary</v-btn>
        <v-btn flat color="info">Info</v-btn>

        <br />

        <v-btn
          color="success"
          disabled
          block
          round
        >
          Disabled
        </v-btn>

        <br />

        <v-btn fab color="primary">
          <v-icon>remove</v-icon>
        </v-btn>

        <v-btn fab color="pink">
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn fab color="indigo">
          <v-icon>add</v-icon>
        </v-btn>

        <v-btn fab color="teal">
          <v-icon>list</v-icon>
        </v-btn>

        <v-btn fab color="cyan">
          <v-icon>edit</v-icon>
        </v-btn>

        <v-btn fab color="purple">
          <v-icon>android</v-icon>
        </v-btn>

        <br />
        <br />

        <v-btn color="primary" small>Small Button</v-btn>
        <v-btn color="warning" >Normal Button</v-btn>
        <v-btn color="error" large>Large Button</v-btn>

        <v-btn fab small color="primary">
          <v-icon>remove</v-icon>
        </v-btn>

        <v-btn fab color="pink">
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn fab large color="indigo">
          <v-icon>add</v-icon>
        </v-btn>

        <div class="txtBox">
          Vuetify Buttons Url : <a href="https://vuetifyjs.com/ko/components/buttons" target="_blank">https://vuetifyjs.com/ko/components/buttons</a>
        </div>
      </div>


      <div class="tit"><span>COMBOBOX</span></div>
      <div class="box">
        <v-combobox
          v-model="select"
          :items="items"
          item-value="id"
          item-text="name"
        ></v-combobox>
        <div class="txt">selected item : <span>{{ select }}</span></div>

        <div class="txtBox">
          Vuetify Combobox Url : <a href="https://vuetifyjs.com/en/components/combobox" target="_blank">https://vuetifyjs.com/en/components/combobox</a>
        </div>
      </div>

      <div class="tit"><span>Text field</span></div>
      <div class="box">

        <v-layout row wrap>

          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Regular"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Regular"
              placeholder="Placeholder"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Solo"
              solo
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Solo"
              placeholder="Placeholder"
              solo
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Box"
              box
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Box"
              placeholder="Placeholder"
              box
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Outline"
              outline
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Outline"
              placeholder="Placeholder"
              outline
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="txtBox">
          Vuetify Text field Url : <a href="https://vuetifyjs.com/en/components/text-fields" target="_blank">https://vuetifyjs.com/en/components/text-fields</a>
        </div>
      </div>

      <div class="tit"><span>Selection controls</span></div>
      <div class="box">
        <v-layout row wrap>
          <v-checkbox
            :label="`Checkbox 1: ${checkbox[0].toString()}`"
            v-model="checkbox[0]"
            hide-details
          ></v-checkbox>
          <v-checkbox
            :label="`Checkbox 2: ${checkbox[1].toString()}`"
            v-model="checkbox[1]"
            hide-details
          ></v-checkbox>
          <v-checkbox
            :label="`Checkbox 3: ${checkbox[2].toString()}`"
            v-model="checkbox[2]"
            hide-details
          ></v-checkbox>
        </v-layout>

        <v-radio-group v-model="radio" row>
          <v-radio label="Option 1" value="radio-1"></v-radio>
          <v-radio label="Option 2" value="radio-2"></v-radio>
        </v-radio-group>

        <v-layout row>
          <v-switch :label="`Switch 1: ${switch1.toString()}`" v-model="switch1"></v-switch>
          <v-switch :label="`Switch 2: ${switch2.toString()}`" v-model="switch2"></v-switch>
        </v-layout>

        <div class="txtBox">
          Vuetify Selection controls Url : <a href="https://vuetifyjs.com/en/components/selection-controls" target="_blank">https://vuetifyjs.com/en/components/selection-controls</a>
        </div>
      </div>

    </div>
  </v-container>
</template>

<script>
import * as VCombobox from 'vuetify/es5/components/VCombobox';
import * as VCheckbox from 'vuetify/es5/components/VCheckbox';
import * as VRadioGroup from 'vuetify/es5/components/VRadioGroup';
import * as VSwitch from 'vuetify/es5/components/VSwitch';
import * as VTextField from 'vuetify/es5/components/VTextField';

export default {
  name: 'VuetifyGuide',
  components: {
    ...VCombobox,
    ...VCheckbox,
    ...VRadioGroup,
    ...VSwitch,
    ...VTextField
  },
  data () {
    return {
      msg: ' - VuetifyGuide',
      select: '',
      items: [
        { id: 1, name: '1combobox' },
        { id: 2,  name: '2combobox' },
        { id: 3,  name: '3combobox' },
        { id: 4,  name: '4combobox' }
      ],
      switch1: true,
      switch2: false,
      radio: 'radio-1',
      checkbox: [ true, false, true ],
      radioGroup: 1,
      switch1: true
    };
  },
  props: {
  },
  created () {
    console.log(this.msg);
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
    }
  }
};
</script>

<style lang="less">
  @import '../less/mixin';
  .guideBox {
    .text-center;
    .tit {
      position: relative;
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
      span {
        position: relative;
        padding: 0 10px;
        z-index: 1;
        background-color: #303030;
      }
      &::before {
        content: '';
        position:absolute;
        top:50%;
        left:0;
        margin-top:-2px;
        width:100%;
        height:1px;
        background-color: #fff;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
      }
    }
    .box {
      padding-bottom: 50px;
      .txt {
        .text-left;
        span {
          color:#F4511E;
        }
      }
      .txtBox {
        margin-top:20px;
        padding:15px 20px;
        font-size:15px;
        .text-left;
        background-color: #b5b5b5;
        border-radius: 5px;
      }
    }
  }
</style>

