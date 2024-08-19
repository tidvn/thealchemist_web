import React, { useState } from "react"
import { Formik, ErrorMessage } from 'formik'
import {
  Button,
  Label,
  TextInput,
  Checkbox,
  Alert,
} from "flowbite-react"
import PasswordStrengthBar from 'react-password-strength-bar'
import * as Yup from "yup"

import useAuth from '../../libs/useAuth'
import Swal2 from '../../libs/swal2'
import Link from '../../components/Elements/Link'
import BlockUI from '../../components/Elements/BlockUI'
import { getSiteUrl } from '../../libs/links.js'
import ShowHidePwdInput from "../../components/Elements/InputShowHidePwd"

function SignUp() {
  const { signUp } = useAuth()
  return (
    <>
      <div className="h-screen flex bg-white overflow-hidden">
        <div className="grow relative z-10 hidden md:block">
          <img className="absolute z-0 object-cover inset-0 w-full h-full" src="/img/bg-auth.jpg" width="2154" height="2160" alt="" loading="lazy" />

          <div className="absolute z-10 top-10 left-10">
            <Link href="/" className="flex items-center gap-2 text-white">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.2955 5.9545C22.8562 5.51517 22.1438 5.51517 21.7045 5.9545L10.4545 17.2045C10.0152 17.6438 10.0152 18.3562 10.4545 18.7955L21.7045 30.0455C22.1438 30.4848 22.8562 30.4848 23.2955 30.0455C23.7348 29.6062 23.7348 28.8938 23.2955 28.4545L12.841 18L23.2955 7.5455C23.7348 7.10616 23.7348 6.39384 23.2955 5.9545Z" fill="white" />
              </svg>

              Back to Home
            </Link>
          </div>
        </div>

        <div className="shrink-0 w-full md:w-fit p-6 md:px-12 md:py-14 xl:px-40 xl:py-28 overflow-y-auto">
          <div className="relative w-fit mx-auto md:w-[calc(100vw/2)] xl:w-[500px]">

            <div className="sticky top-0 bg-white z-[100] md:relative">
              <Link href="/" className="flex items-center">
                <img src="/logo.svg" className="mr-2 h-8" alt="The Alchemist" />
                <span className="self-center text-base lg:text-2xl font-semibold whitespace-nowrap text-primary">The Alchemist</span>
              </Link>
            </div>

            <header className="mb-8">
              <h1 className="text-4xl font-bold mt-12 lg:mt-18">Sign Up</h1>
            </header>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                tos: false,
                submit: false,
              }}
              validationSchema={Yup.object().shape({
                firstName: Yup.string()
                  .max(255)
                  .required('Please enter your first name'),
                lastName: Yup.string()
                  .max(255)
                  .required('Please enter your last name'),
                email: Yup.string()
                  .email('Please enter a valid email.')
                  .max(255)
                  .required('Email is required.'),
                password: Yup.string()
                  .min(8, 'Password must be at least 8 characters.')
                  .max(255)
                  .required('Password is required.'),
                confirmPassword: Yup.string()
                  .required('Confirm password is required.')
                  .when("password", {
                    is: (val) => val && val.length > 0,
                    then: Yup.string().oneOf(
                      [Yup.ref("password")],
                      "Password does not match.",
                    ),
                  }),
                tos: Yup.boolean()
                  .oneOf([true], 'Please accept the Terms of Service.'),
              })}
              onSubmit={async (
                values,
                { setErrors, setStatus, setSubmitting, resetForm },
              ) => {
                try {
                  await signUp(values)

                  await resetForm()

                  await Swal2.fire({
                    title: 'Successfully',
                    html: <p className="text-sm">You have successfully registered an account. Please check your email to activate your account.</p>,
                  });

                  window.location.href = getSiteUrl('/')
                } catch (error) {
                  console.error(error)

                  // TODO: Improver server error message.
                  const message = error.message || "Something went wrong"

                  setStatus({ success: false })
                  setErrors({ submit: message })

                  setSubmitting(false)
                }
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values,
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <BlockUI isLoading={isSubmitting}>

                    {errors.submit && (
                      <Alert color="failure" className="mb-8">
                        <span>{errors.submit}</span>
                      </Alert>
                    )}

                    <div className="space-y-8">
                      <div className="grid grid-cols-2 gap-8">
                        <fieldset>
                          <Label htmlFor="firstName" value="First Name" className="inline-block mb-2" />

                          <TextInput
                            type="firstName"
                            id="firstName"
                            name="firstName"
                            value={values.firstName}
                            placeholder="Please enter your first name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            helperText={touched.firstName && errors.firstName}
                            color={Boolean(touched.firstName && errors.firstName) ? 'failure' : 'gray'}
                          />
                        </fieldset>

                        <fieldset>
                          <Label htmlFor="lastName" value="Last Name" className="inline-block mb-2" />

                          <TextInput
                            type="lastName"
                            id="lastName"
                            name="lastName"
                            value={values.lastName}
                            placeholder="Please enter your last name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            helperText={touched.lastName && errors.lastName}
                            color={Boolean(touched.lastName && errors.lastName) ? 'failure' : 'gray'}

                          />
                        </fieldset>
                      </div>

                      <fieldset>
                        <Label htmlFor="email" value="Email" className="inline-block mb-2" />

                        <TextInput
                          type="email"
                          id="email"
                          name="email"
                          value={values.email}
                          placeholder="Please enter your email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          helperText={touched.email && errors.email}
                          color={Boolean(touched.email && errors.email) ? 'failure' : 'gray'}
                        />
                      </fieldset>

                      <fieldset>
                        <Label htmlFor="password" value="Password" className="inline-block mb-2" />

                        <ShowHidePwdInput
                          id="password"
                          name="password"
                          value={values.password}
                          placeholder="Please enter your password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          helperText={touched.password && errors.password}
                          color={Boolean(touched.email && errors.email) ? 'failure' : 'gray'}
                          errors={errors.password}
                        />

                        <PasswordStrengthBar
                          password={values.password}
                          shortScoreWord="Use 8 or more characters with a combination of letters, numbers, and symbols."
                          scoreWords={[
                            'Use 8 or more characters with a combination of letters, numbers, and symbols.',
                            'Use 8 or more characters with a combination of letters, numbers, and symbols.',
                            'Use 8 or more characters with a combination of letters, numbers, and symbols.',
                            'Strong password',
                            'Strong password',
                          ]}
                          style={{ textAlign: "left" }}
                          scoreWordClassName="scoreWord"
                          scoreWordStyle={{ textAlign: "left" }}
                        />
                      </fieldset>

                      <fieldset>
                        <Label htmlFor="confirmPassword" value="Confirm Password" className="inline-block mb-2" />

                        <ShowHidePwdInput
                          id="confirmPassword"
                          name="confirmPassword"
                          value={values.confirmPassword}
                          placeholder="Please enter your re-password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          helperText={touched.confirmPassword && errors.confirmPassword}
                          color={Boolean(touched.email && errors.email) ? 'failure' : 'gray'}
                          errors={errors.confirmPassword}
                        />
                      </fieldset>
                    </div>

                    <fieldset>
                      <div className="flex items-center gap-2 mt-8">
                        <Checkbox
                          id="tos"
                          name="tos"
                          checked={values.tos}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />

                        <Label htmlFor="tos">
                          I agree to The Alchemist's
                          <Link href="#" className="text-sm text-primary hover:underline"> Terms of Use</Link> and <Link href="#" className="text-sm text-primary hover:underline"> Privacy Policy</Link>
                        </Label>
                      </div>

                      <ErrorMessage
                        name="tos"
                        component="p"
                        className="text-[#CC0001] mt-2 text-xs font-medium"
                      />
                    </fieldset>

                    <div className="mt-12">
                      <Button
                        type="submit"
                        className="w-full"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        Create
                      </Button>
                    </div>

                    <div className="text-center mt-8 text-neutral3 text-sm">
                      Already have an account?
                      <Link href="/login" className="text-sm text-primary"> Sign In</Link>
                    </div>

                  </BlockUI>
                </form>
              )}
            </Formik>
          </div >
        </div >
      </div >
    </>
  );
}

export default SignUp;
