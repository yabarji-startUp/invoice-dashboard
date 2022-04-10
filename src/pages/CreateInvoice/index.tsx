import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import {
  AppShell,
  // Navbar,
  Header,
  Footer,
  Aside,
  MediaQuery,
  Burger,
  useMantineTheme,
  MantineProvider,
  Paper,
} from '@mantine/core';
import Navbar from '../../components/Navbar';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const CreateInvoice = () => {  
  return (
    <>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <Navbar links={[
          {
            'link': '/',
            'label': 'Home'
          },
          {
            'link': '/create',
            'label': 'Create Invoice'
          }
        ]}/>
        <Paper style={{ height: '100vh', borderRadius: 0 }}>
          {/* <Text>
      Create Invoice
          </Text> */}
          <PDFViewer>
            <Document>
              <Page size="A4" >
                <View>
                  <Text>Section #1</Text>
                </View>
                <View>
                  <Text>Section #2</Text>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </Paper>
      </MantineProvider>
    </>
  );
};

export default CreateInvoice;
