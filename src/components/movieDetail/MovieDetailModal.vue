<template>
  <teleport to="body">
    <div v-if="isShowModal" class="modal" @click="closeModal">
      <div class="modal__inner" @click.stop>
        <div class="modal__image-wrap">
          <img
            v-if="currentMovie.Poster !== 'N/A'"
            :src="currentMovie.Poster"
            alt="포스터"
            class="modal__img"
          />
          <div v-else class="modal__img no-img">
            <span>🤣</span>
            <p>Oops!</p>
          </div>
        </div>
        <dl class="modal__content">
          <dt class="modal__content__title">📄 영화제목</dt>
          <dd>{{ currentMovie.Title }}</dd>
          <dt class="modal__content__title">📅 개봉일</dt>
          <dd>{{ currentMovie.Released }}</dd>
          <dt class="modal__content__title">✅ 장르</dt>
          <dd>{{ currentMovie.Genre }}</dd>
          <dt class="modal__content__title">🎬 감독</dt>
          <dd>{{ currentMovie.Director }}</dd>
          <dt class="modal__content__title">🕴🏻 배우</dt>
          <dd>{{ currentMovie.Actors }}</dd>
          <dt class="modal__content__title">📖 줄거리</dt>
          <dd>{{ currentMovie.Plot }}</dd>
        </dl>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  computed: {
    isShowModal() {
      return this.$store.state.isShowModal;
    },
    currentMovie() {
      return this.$store.state.currentMovie;
    },
  },
  methods: {
    closeModal() {
      console.log('closeModal!!');
      this.$store.commit('assignState', { isShowModal: false });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  &__img {
    width: 20vw;
    height: calc(20vw * 1.3);
    border-radius: 8px;
    &.no-img {
      background-color: lightgrey;
      // width: 200px;
      // height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        font-size: 4rem;
      }
      p {
        font-size: 2rem;
        color: grey;
      }
    }
  }
  &__inner {
    max-width: 60vw;
    max-height: 60vh;
    background-color: white;
    padding: 32px;
    display: flex;
    gap: 2rem;
    border-radius: 1rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
  }
}

@media screen and (max-width: $breakpoint-lg) {
  .modal {
    &__inner {
      max-width: 80vw;
      flex-direction: column;
      align-items: center;
    }
    // &__img {
    //   width: 200px;
    //   height: 300px;
    // }
  }
}

//
@media screen and (max-width: $breakpoint-xs - 1) {
  .modal {
    &__img {
      width: calc(95vw - 32px);
      height: calc(95vw * 1.3);
    }
  }
}

@media screen and (min-width: $breakpoint-xs) and (max-width: $breakpoint-sm - 1) {
  .modal {
    &__img {
      width: calc(50vw - 32px);
      height: calc(50vw * 1.3);
    }
  }
}

@media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-md - 1) {
  .modal {
    &__img {
      width: 200px;
      height: 260px;
    }
  }
}

@media screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-xl - 1) {
  .modal {
    &__img {
      width: 300px;
      height: 400px;
    }
  }
}

@media screen and (min-width: $breakpoint-xl) {
  .modal {
    &__img {
      width: 400px;
      height: 600px;
    }
  }
}
</style>
