<template>
  <main class="bg-[#303435] h-screen">
    <!-- <section class="bbg-[#303435] flex justify-center items-center pt-20 container mx-auto">
      <div class="p-4 md:p-8 space-y-3 w-11/12 mx-auto mt-20 bg-white rounded-xl md:w-[500px] border shadow-sm">
        <h1 class="text-2xl font-bold text-center">
          Admin Login
        </h1>
        <form class="space-y-10 w-full bg-white" @submit.prevent="login">
          <div class="space-y-1 text-sm w-full">
            <label for="email" class="block dark:text-gray-400">Email</label>
            <input id="email" v-model="form.email" type="email" name="email" placeholder="email"
              class="border w-full px-4 py-3 rounded-md outline-none">
            <small v-if="!isEmailValid" class="text-red-600 text-sm font-medium">Please enter a valid email
              address</small>
          </div>
          <div class="space-y-1 text-sm w-full">
            <label for="password" class="block dark:text-gray-400">Password</label>
            <input id="password" v-model="form.password" type="password" name="password" placeholder="Password"
              class="border w-full px-4 py-3 rounded-md outline-none">
          </div>
          <button :disabled="!isFormEmpty || processing"
            class="block w-full disabled:cursor-not-allowed disabled:opacity-25 p-3 text-sm text-center  bg-black text-white rounded-md">
            {{ processing ? 'processing...' : 'Sign in' }}
          </button>
        </form>
      </div>
    </section> -->
    <div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-900">Withdrawals</h1>
            <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title,
              email and role.</p>
          </div>
          <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button type="button"
              class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
              user</button>
          </div>
        </div>
      </div>
      <div class="mt-8 flow-root overflow-hidden">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table class="w-full text-left">
            <thead class="bg-white">
              <tr>
                <th scope="col" class="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                  Name
                  <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200"></div>
                  <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200"></div>
                </th>
                <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                  Title</th>
                <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell">
                  Email</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                <th scope="col" class="relative py-3.5 pl-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="relative py-4 pr-3 text-sm font-medium text-gray-900">
                  Lindsay Walton
                  <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                  <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                </td>
                <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">Front-end Developer</td>
                <td class="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">lindsay.walton@example.com</td>
                <td class="px-3 py-4 text-sm text-gray-500">Member</td>
                <td class="relative py-4 pl-3 text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay
                      Walton</span></a>
                </td>
              </tr>

              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  layout: 'authLayout',
  data() {
    return {
      processing: false,
      isEmailValid: true,
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.email && this.form.password)
    }
  },
  watch: {
    'form.email'(value) {
      this.form.email = value
      this.validateEmail(value)
    }
  },
  methods: {
    async login() {
      this.processing = true
      const loginMutation = `
        mutation {
          adminLogin(email: "${this.form.email}", password: "${this.form.password}") {
            jwt
            user {
              id
              firstName
              lastName
              email
              Status
              PlanType
              accountBalance
              tradingBalance
              profit
              eth
              btc
              timeAdded
            }
          }
        }
      `
      try {
        const response = await fetch('https://visionary-zpui.onrender.com/graphql/query', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            query: loginMutation,
            variables: {
              email: this.form.email,
              password: this.form.password
            }
          })
        })
        const data = await response.json()
        if (data?.errors) {
          this.$toastr.e(data.errors[0].message)
        } else {
          if (process.client) {
            window.localStorage.setItem('auth', JSON.stringify(data?.data?.adminLogin?.jwt))
            window.localStorage.setItem('user', JSON.stringify(data?.data?.adminLogin?.user))
            this.$toastr.s('Login was successful')
            this.$router.push('/admin/dashboard')
          }
        }
      } finally {
        this.processing = false
      }
    },
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.isEmailValid = true
      } else {
        this.isEmailValid = false
      }
    }
  }
}
</script>
