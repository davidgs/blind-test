import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SelectComponent from './SelectComponent'

export default function GetSelectComponent(name) {
  const [dat, getData] = useState('');
  const baseUrl = "http://localhost:3030/api/" + name.name;
  useEffect(() => {
    getSelectValues();
  }, []);
  const getSelectValues = () => {
    axios.get(baseUrl)
      .then(res => {
        var dat = res.data;
        dat = [{ _id: '', Name: 'Select ' + name.name }, ...dat];
        dat.name = name.name;
        getData(dat);
      })
      .catch(error => console.error('Error: ', error));
  }

  return <SelectComponent data={dat} />;
}