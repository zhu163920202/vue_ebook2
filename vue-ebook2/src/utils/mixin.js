import { mapGetters } from 'vuex'

export const ebookMixin = {
  computed: {
      // 通过辅助函数将其映射
      ...mapGetters([
        'fileName',
        'menuVisiable'
      ])
  }
}
