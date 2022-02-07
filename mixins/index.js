import { mapState } from 'vuex'
export const userEdit = {
  data () {
    return {
      backLink: '/users',
      form: {
        firstName: '',
        lastName: '',
        carId: null
      },
      initParams: [
        { name: 'firstName', component: 'ElInput', label: 'Имя' },
        { name: 'lastName', component: 'ElInput', label: 'Фамилия' },
        { name: 'carId', component: 'ElSelect', label: 'Машина', selectName: 'carsList', idField: 'carId', values: [] }
      ]
    }
  },
  computed: {
    ...mapState('cars', { carsList: 'list' }),
    inputParams () {
      return this.initParams.map((item) => {
        if (item.selectName) {
          item.values = this[item.selectName]
        }
        return item
      })
    },
    currentUser () {
      const user = this.$store.state.users.list.find((user) => {
        return +user.userId === +this.$route.params.id
      })
      return Object.assign({}, this.form, user || {})
    },
    title () {
      return this.currentUser.name ? 'Редактирование пользоваетеля id №' + this.currentUser.userId : 'Создание пользоваетеля'
    }
  },
  methods: {
    onSubmit (form) {
      this.$store.dispatch('users/update', form)
      this.$router.push(this.backLink)
    }
  }
}
export const carEdit = {
  data () {
    return {
      backLink: '/cars',
      form: {
        name: '',
        description: ''
      },
      inputParams: [
        { name: 'name', component: 'ElInput', label: 'Название' },
        { name: 'description', component: 'ElInput', label: 'Описание' }
      ]
    }
  },
  computed: {
    title () {
      return this.currentCar.name ? 'Редактирование авто id №' + this.currentCar.carId : 'Создание авто'
    },
    currentCar () {
      const car = this.$store.state.cars.list.find((car) => {
        return +car.carId === +this.$route.params.id
      })
      return Object.assign({}, this.form, car || {})
    }
  },
  methods: {
    onSubmit (form) {
      this.$store.dispatch('cars/update', form)
      this.$router.push(this.backLink)
    }
  }
}
