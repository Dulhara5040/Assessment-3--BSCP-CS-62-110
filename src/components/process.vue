<template>
  <div class="process-container" v-bind:class="rootClassName">
    <div class="process-testimonial"></div>
    <div class="process-steps">
      <h1 class="process-text"><span>Discover Our Process</span></h1>
      <span class="process-text02">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <br />
        <span></span>
      </span>
      <div class="process-container01">
        <div class="process-step">
          <div class="process-container02">
            <div class="process-line"></div>
            <div class="process-container03">
              <svg viewBox="0 0 1024 1024" class="process-icon">
                <path
                  d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"
                ></path>
              </svg>
            </div>
            <div class="process-line1"></div>
          </div>
          <div class="process-container04">
            <h1 class="process-text05">Idea</h1>
            <span class="process-text06">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br />
              <span></span>
            </span>
          </div>
        </div>
        <div class="process-step1">
          <div class="process-container05">
            <div class="process-line2"></div>
            <div class="process-container06">
              <svg viewBox="0 0 1024 1024" class="process-icon02">
                <path
                  d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"
                ></path>
              </svg>
            </div>
            <div class="process-line3"></div>
          </div>
          <div class="process-container07">
            <h1 class="process-text09"><span>Design</span></h1>
            <span class="process-text11">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br />
              <span></span>
            </span>
          </div>
        </div>
        <div class="process-step2">
          <div class="process-container08">
            <div class="process-line4"></div>
            <div class="process-container09">
              <svg viewBox="0 0 1024 1024" class="process-icon04">
                <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
              </svg>
            </div>
            <div class="process-line5"></div>
          </div>
          <div class="process-container10">
            <h1 class="process-text14"><span>Develop</span></h1>
            <span class="process-text16">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br />
              <span></span>
            </span>
          </div>
        </div>
        <div class="process-step3">
          <div class="process-container11">
            <div class="process-line6"></div>
            <div class="process-container12">
              <svg viewBox="0 0 1024 1024" class="process-icon07">
                <path
                  d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"
                ></path>
              </svg>
            </div>
            <div class="process-line7"></div>
          </div>
          <div class="process-container13">
            <h1 class="process-text19"><span>Deploy</span></h1>
            <span class="process-text21">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br />
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="process-stats">
      <div class="process-stat">
        <svg viewBox="0 0 1152 1024" class="process-icon09">
          <path
            d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
          ></path>
          <path
            d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"
          ></path>
        </svg>
        <span class="process-text24">Customers</span>
        <span class="process-text25">Lorem ipsum dolor sit amet.</span>
        <h1 class="process-text26"><span>50</span></h1>
      </div>
      <div class="process-stat1">
        <svg viewBox="0 0 1024 1024" class="process-icon12">
          <path
            d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"
          ></path>
        </svg>
        <span class="process-text28">Appointments</span>
        <span class="process-text29">Lorem ipsum dolor sit amet.</span>
        <h1 class="process-text30">30</h1>
      </div>
      <div class="process-stat2">
        <svg viewBox="0 0 1024 1024" class="process-icon14">
          <path
            d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"
          ></path>
        </svg>
        <span class="process-text31">Cities</span>
        <span class="process-text32">Lorem ipsum dolor sit amet.</span>
        <h1 class="process-text33"><span>20</span></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Process',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.process-container {
  width: 100%;
  height: 653px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.process-testimonial {
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  justify-content: center;
}
.process-steps {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
}
.process-text {
  color: var(--dl-color-gray-black);
  font-size: 3rem;
}
.process-text02 {
  color: var(--dl-color-gray-700);
  font-size: 1.15rem;
  max-width: 600px;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.process-container01 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.process-step {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.process-container02 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.process-line {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: transparent;
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.process-container03 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.process-icon {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.process-line1 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.process-container04 {
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.process-text05 {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.process-text06 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  text-align: center;
}
.process-step1 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.process-container05 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.process-line2 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.process-container06 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.process-icon02 {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.process-line3 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.process-container07 {
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.process-text09 {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.process-text11 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  text-align: center;
}
.process-step2 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.process-container08 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.process-line4 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.process-container09 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.process-icon04 {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.process-line5 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.process-container10 {
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.process-text14 {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.process-text16 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  text-align: center;
}
.process-step3 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.process-container11 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.process-line6 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.process-container12 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.process-icon07 {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.process-line7 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: transparent;
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.process-container13 {
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.process-text19 {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.process-text21 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  text-align: center;
}
.process-stats {
  width: 100%;
  height: 50%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  justify-content: center;
}
.process-stat {
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.process-icon09 {
  fill: var(--dl-color-gray-700);
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
}
.process-text24 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.process-text25 {
  color: var(--dl-color-gray-700);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.process-text26 {
  font-size: 3rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 300;
}
.process-stat1 {
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.process-icon12 {
  fill: var(--dl-color-gray-700);
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
}
.process-text28 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.process-text29 {
  color: var(--dl-color-gray-700);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.process-text30 {
  font-size: 3rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 300;
}
.process-stat2 {
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.process-icon14 {
  fill: var(--dl-color-gray-700);
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
}
.process-text31 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.process-text32 {
  color: var(--dl-color-gray-700);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.process-text33 {
  font-size: 3rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 300;
}

@media(max-width: 991px) {
  .process-text {
    text-align: center;
  }
  .process-text02 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .process-steps {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .process-container01 {
    align-items: flex-start;
    padding-left: var(--dl-space-space-fiveunits);
    flex-direction: column;
  }
  .process-step {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .process-container02 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    padding-bottom: 2px;
    justify-content: space-between;
  }
  .process-line1 {
    border-color: var(--dl-color-gray-900);
    border-style: dashed;
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .process-container04 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .process-text05 {
    margin-top: var(--dl-space-space-twounits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .process-text06 {
    text-align: left;
  }
  .process-step1 {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .process-container05 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    padding-bottom: 2px;
    justify-content: space-between;
  }
  .process-line2 {
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .process-line3 {
    border-color: var(--dl-color-gray-900);
    border-style: dashed;
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .process-container07 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .process-text09 {
    margin-top: var(--dl-space-space-twounits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .process-text11 {
    text-align: left;
  }
  .process-step2 {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .process-container08 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    padding-bottom: 2px;
    justify-content: space-between;
  }
  .process-line4 {
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .process-line5 {
    border-color: var(--dl-color-gray-900);
    border-style: dashed;
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .process-container10 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .process-text14 {
    margin-top: var(--dl-space-space-twounits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .process-text16 {
    text-align: left;
  }
  .process-step3 {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .process-container11 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    padding-bottom: 2px;
    justify-content: space-between;
  }
  .process-line6 {
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .process-line7 {
    border-color: transparent;
    border-style: dashed;
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .process-container13 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .process-text19 {
    margin-top: var(--dl-space-space-twounits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .process-text21 {
    text-align: left;
  }
  .process-stats {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .process-stat {
    padding: var(--dl-space-space-unit);
  }
  .process-text24 {
    text-align: center;
  }
  .process-stat1 {
    padding: var(--dl-space-space-unit);
  }
  .process-text28 {
    text-align: center;
  }
  .process-stat2 {
    padding: var(--dl-space-space-unit);
  }
  .process-text31 {
    text-align: center;
  }
}
@media(max-width: 479px) {
  .process-steps {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .process-container01 {
    padding-left: 0px;
  }
  .process-container04 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: 0px;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .process-text05 {
    margin-left: 0px;
    margin-right: var(--dl-space-space-twounits);
  }
  .process-container07 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: 0px;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .process-text09 {
    margin-left: 0px;
    margin-right: var(--dl-space-space-twounits);
  }
  .process-container10 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: 0px;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .process-text14 {
    margin-left: 0px;
    margin-right: var(--dl-space-space-twounits);
  }
  .process-container13 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: 0px;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .process-text19 {
    margin-left: 0px;
    margin-right: var(--dl-space-space-twounits);
  }
  .process-stats {
    align-items: center;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
  }
}
</style>
