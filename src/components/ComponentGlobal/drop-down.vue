<template>
  <div id="dropdown" class="dropdown" @click="toggleDropDown($event)">
    <slot name="avatar">
    </slot>
    <slot name="title">
      <div class="title">
        <p class="title-text">
          {{title}}
          <i class="fa" :class="icon"></i>
        </p>
      </div>
    </slot>
    <transition name="dropdown-slide-fade">
      <ul v-if="isOpen" id="dropdown-content" class="dropdown-menu">
        <slot name="header-a"></slot>
        <slot name="header-b"></slot>
        <slot name="header-c"></slot>
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>
<script>
  export default{
    props: {
      title: String,
      icon: String,
      image: String
    },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleDropDown ($event) {
        this.isOpen = !this.isOpen
        var el = $event.currentTarget
        document.addEventListener('click', (event) => {
          if (!el.contains(event.target)) {
            if (this.isOpen) {
              this.isOpen = false
            }
          }
        }, true)
      }
    }
  }
</script>
<style lang="scss" scoped>
.dropdown-slide-fade-enter-active {
  transition: all 0.1s ease;
}

.dropdown-slide-fade-leave-active {
  transition: all 0.1s ease;
}

.dropdown-slide-fade-enter, .dropdown-slide-fade-leave-to{
  opacity: 0;
  max-height: 0;
}
.dropdown-slide-fade-enter-to{
  max-height: 10rem;
}
.dropdown-slide-fade-leave{
  max-height: 10rem;
}
.flag-icon{
  font-size: 15px;
}
</style>
