<template>
  <div v-if="showComponent">
    <div class="popupBox">
      <div class='whiteBG'>
        <h1>隱私條例</h1>
        <div class="separator"></div>
        <a>
          隐私政策是Fi88处理客户个人信息的原则，包括客户通过进入本网站，或者联系我们索取信息、服务及客户服务支持时收集到的客户个人信息。客户个人信息包括客户的姓名、地址、电话号码、电子邮箱地址、身分证号码，身份证明文文件以及银行账户数据。隐私政策同样适用于Fi88的商业合作伙伴所提供的客户任何个人信息。但本隐私政策并不适用于本公司和员工以外的公司及个人。
          接受隐私政策
          <br>
          当客户进入和使用我们网站时将会被视为已经接受并同意我们的隐私==政策。
          信息的收集和使用
          <br>
          我们可能在客户递交网上表格，发邮件向我们索取数据、服务或者客户支持过程中来收集到客户的个人数据。另外，我们会在客户使用我们的产品和服务时，或通过我们的合作伙伴接触到客户的个人资料。当客户未有登入账户或者未联系我们及递交表格的情况下，我们是不会收集客户的个人信息。我们只会将客户的个人信息用于满足客户的要求，提供产品和服务。
          信息分享和透露
          <br>
          我们不会把客户的个人数据出售或者出租给其它人。只有在以下情况下我们才会透露客户的个人资料：
          <br>
          我们得到客户的同意分享他的个人信息；或 <br>
          为了满足客户提供服务及产品的需求；或 <br>
          为了客户所要求提供服务的需要，我们需要将这些数据发送给某些代表我们的公司以提供服务（在我们收集客户信息时，已经告知客户这些公司没有权限使用我们所提供的客户数据，我们只是让他们有限度地协助我们满足客户的要求）；或
          当收到法庭传票，法庭要求及法律程序要求；或 <br>
          我们发现客户在本网站上的行为违反了我们的服务条款及特定服务的指引。 <br>
          为了应客户要求而提供信息及服务的需要，我们可能会将客户的个人数据传送或储存到计算机设备或者位于不同国家地区的办公室，并作为内部数据处理及管理，并视同已获得客户同意。
          联络我们 <br>
          如果您对于我们现有的有关您的数据有任何疑问或者您希望我们更新或删除您的个人信息，请发送电子邮件到以下邮箱，或者按照在本网站“联络我们”中所提到的地址寄信告知我们。 <br>
        </a>

        <a href="#" class="knowButton" @click="handleClick">知道了</a>
      </div>
    </div>
  </div>



</template>

<script>
import { ref, defineComponent, watch } from 'vue';

export default defineComponent({
  props: {
    showAgreeTerms: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const showComponent = ref(false);

    const closeShowComponent = () => {

      showComponent.value = false;


    };

    const handleClick = () => {
      closeShowComponent();

    };

    // 使用 watch 监听 props.showAgreeTerms 的变化
    watch(() => props.showAgreeTerms, (newVal) => {
      if (newVal) {
        console.log('change watch')
        showComponent.value = true;
      }
    });

    return {
      showComponent,
      handleClick,
    };
  },
});
</script>

<style scoped>
.popupBox {
  position: relative;
  background-color: rgba(128, 128, 128, 0.5);
  width: 3000px;
  height: 2000px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.whiteBG {
  transform: translate(-50%, -30%);
  width: 800px;
  background-color: white;
  padding: 50px;
}

.popupBox .separator {
  border-top: 1px solid gray;
  margin: 20px 0;
}

.popupBox .knowButton {
  display: inline-block;
  background-color: blue;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 20px;
  border-radius: 5px;
}

h1 {
  color: black;
  font-size: 24px;
}
</style>