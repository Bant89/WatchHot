import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { APIKEY, BASE_URL } from '../api/info'
const ENDPOINT = '/discover/movie'