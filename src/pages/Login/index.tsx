import { Button, Center, Checkbox, Group, Input, MantineProvider, Paper, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';
import { supabase } from '../../helpers/supabaseClient';
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const { isLoggedIn, loginUser } = useAuth();
    
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    // },
  });

  async function loginUser2(values) {
    // console.log(auth);
    // let { user, error } = await supabase.auth.signIn({
    //   email: values.email,
    //   password: values.password,
    // });

    // console.log(user, error);
    // console.log(values);

    // let { user, error } = await supabase.auth.signUp({
    //   email: values.email,
    //   password: values.password,
    // });

    // // const { user, session, error } = await supabase.auth.signUp({
    // //   email: 'ayush.lal@outlook.com',
    // //   password: 'example-password',
    // // });

    // console.log(user);
    // // console.log(session);
    // console.log(error);
  }
  
  return (
    <>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <Paper style={{ height: '100vh', borderRadius: 0 }}>
          <Center style={{ height: '100%' }}>
            <form onSubmit={form.onSubmit((values) => loginUser(values))}>
              <TextInput
                required
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps('email')}
              />
              <br/>
              <PasswordInput
                placeholder="Password"
                label="Password"
                {...form.getInputProps('password')}
                required
              />
              <Group mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Center>
        </Paper>          
      </MantineProvider>
    </>
  );
}

export default Login;