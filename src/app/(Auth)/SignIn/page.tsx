/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"
import BlockUI from '@/components/ui/BlockUI'
import { Alert, Button, Label, TextInput } from "flowbite-react"

// import * as Yup from "yup"
// import { Formik } from 'formik'
// import { Button, Label, TextInput, Alert } from "flowbite-react"

// import Link from '../../components/Elements/Link'
// import useAuth from '../../libs/useAuth'
// import ShowHidePwdInput from "../../components/Elements/InputShowHidePwd"

export default function SignIn() {
  // const { signIn } = useAuth()

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-white">
        <div className="relative z-10 hidden grow md:block">
          <img className="absolute inset-0 size-full object-cover" src="/img/bg-auth.jpg" width="2154" height="2160" alt="" loading="lazy" />

          <div className="absolute left-10 top-10 z-10">
            <Link href="/" className="flex items-center gap-2 text-white">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.2955 5.9545C22.8562 5.51517 22.1438 5.51517 21.7045 5.9545L10.4545 17.2045C10.0152 17.6438 10.0152 18.3562 10.4545 18.7955L21.7045 30.0455C22.1438 30.4848 22.8562 30.4848 23.2955 30.0455C23.7348 29.6062 23.7348 28.8938 23.2955 28.4545L12.841 18L23.2955 7.5455C23.7348 7.10616 23.7348 6.39384 23.2955 5.9545Z" fill="white" />
              </svg>

              Back to Home
            </Link>
          </div>
        </div>

        <div className="w-full shrink-0 overflow-y-auto p-6 md:w-fit md:px-12 md:py-14 xl:px-40 xl:py-28">
          <div className="relative min-w-fit md:min-w-[calc(100vw/2)] xl:min-w-[500px]">
            <div className="sticky top-0 z-[100] bg-white md:relative">
              <Link href="/" className="flex items-center">
                <img src="/logo.svg" className="mr-2 h-8" alt="The Alchemist" />
                <span className="self-center whitespace-nowrap text-base font-semibold text-primary lg:text-2xl">The Alchemist</span>
              </Link>
            </div>

            <header className="mb-8">
              <h1 className="mt-12 text-4xl font-bold lg:mt-18">Sign In</h1>
            </header>


            <form noValidate >
              <BlockUI isLoading={false}>

                {/* {errors.submit && ( */}
                {/* <Alert color="failure" className="mb-8">
                        <span>abcd</span>
                      </Alert> */}
                {/* )} */}

                <div className="space-y-8">
                  <fieldset>
                    <Label htmlFor="email" value="Username or Email" className="mb-2 inline-block" />

                    <TextInput
                      type="text"
                      id="email"
                      name="email"
                      // value={values.email}
                      placeholder="Please enter your username or email"
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    // helperText={touched.email && errors.email}
                    // color={Boolean(touched.email && errors.email) ? 'failure' : 'gray'}
                    />
                  </fieldset>

                  <fieldset>
                    <Label htmlFor="email" value="Password" className="mb-2 inline-block" />

                    <TextInput type="password" required />
                  </fieldset>
                </div>

                <div className="mt-4 text-right">
                  <Link href="#" className="text-sm text-neutral3 underline">Forgot password?</Link>
                </div>

                <div className="mb-6 mt-12">
                  <Button
                    type="submit"
                    className="w-full"
                  // onClick={handleSubmit}
                  // disabled={isSubmitting}
                  >
                    Sign In
                  </Button>
                </div>

                <div className="text-center text-sm text-neutral3">
                  Don’t have an account?

                  <Link href="/register" className="text-primary"> Sign up</Link>
                </div>

                <div className="my-10 flex items-center justify-between">
                  <span className="mr-2 w-1/2 border-b"></span>
                  <span className="text-xs text-neutral3">Or</span>
                  <span className="ml-2 w-1/2 border-b"></span>
                </div>

                <p className="mb-6 text-center text-sm text-neutral3">
                  Continue with another account
                </p>

                <div className="flex flex-row justify-center gap-5">
                  <Link href="#" className="size-8 rounded-full p-0 text-sm text-neutral3">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z" fill="#F6F6F6" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.8299 16.1818C23.8299 15.6145 23.779 15.069 23.6845 14.5454H16.1499V17.64H20.4554C20.2699 18.64 19.7063 19.4872 18.859 20.0545V22.0618H21.4445C22.9572 20.6691 23.8299 18.6181 23.8299 16.1818Z" fill="#4285F4" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.1496 24C18.3096 24 20.1205 23.2837 21.4442 22.0618L18.8587 20.0546C18.1423 20.5346 17.226 20.8182 16.1496 20.8182C14.066 20.8182 12.3023 19.4109 11.6732 17.52H9.00049V19.5928C10.3169 22.2073 13.0223 24 16.1496 24Z" fill="#34A853" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.6735 17.52C11.5135 17.04 11.4226 16.5272 11.4226 16C11.4226 15.4727 11.5135 14.96 11.6735 14.48V12.4072H9.00081C8.45899 13.4872 8.1499 14.709 8.1499 16C8.1499 17.2909 8.45899 18.5127 9.00081 19.5927L11.6735 17.52Z" fill="#FBBC05" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.1496 11.1818C17.3241 11.1818 18.3787 11.5855 19.2078 12.3782L21.5023 10.0836C20.1169 8.79273 18.306 8 16.1496 8C13.0223 8 10.3169 9.79273 9.00049 12.4073L11.6732 14.48C12.3023 12.5891 14.066 11.1818 16.1496 11.1818Z" fill="#EA4335" />
                    </svg>
                  </Link>

                  <Link href="#" className="size-8 rounded-full p-0 text-sm text-neutral3">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#1877F2" />
                      <path d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z" fill="white" />
                    </svg>
                  </Link>

                  <Link href="#" className="size-8 rounded-full p-0 text-sm text-neutral3">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#1DA1F2" />
                      <path d="M24 11C23.4 11.3 22.8 11.4 22.1 11.5C22.8 11.1 23.3 10.5 23.5 9.7C22.9 10.1 22.2 10.3 21.4 10.5C20.8 9.9 19.9 9.5 19 9.5C16.9 9.5 15.3 11.5 15.8 13.5C13.1 13.4 10.7 12.1 9 10.1C8.1 11.6 8.6 13.5 10 14.5C9.5 14.5 9 14.3 8.5 14.1C8.5 15.6 9.6 17 11.1 17.4C10.6 17.5 10.1 17.6 9.6 17.5C10 18.8 11.2 19.8 12.7 19.8C11.5 20.7 9.7 21.2 8 21C9.5 21.9 11.2 22.5 13 22.5C19.1 22.5 22.5 17.4 22.3 12.7C23 12.3 23.6 11.7 24 11Z" fill="white" />
                    </svg>
                  </Link>
                </div>

              </BlockUI>
            </form>

          </div>
        </div>

      </div>
    </>
  )
}
