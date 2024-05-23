import React, { useEffect, useState } from 'react';
import s from './Detailview.module.scss'
import { useAppDispatch, useAppSelector } from '../../Store/Hooks/hooks';
import { fetchByContries } from '../../Store/Slice/countriesSlice';
import { useParams } from 'react-router-dom';
import { CountriesModules } from '../../Store/Modules';
const Detailview = () => {
    const { name } = useParams()
    const dispatch = useAppDispatch()
    const { countriesSlice, error, loading } = useAppSelector(state => state.countries)
    const [country, setCountry] = useState<CountriesModules | null>(null)
    console.log(country);

    useEffect(() => {
        dispatch(fetchByContries())
    }, [dispatch])
    useEffect(() => {
        countriesSlice.filter(el => el.name.common === name && setCountry(el))
    }, [countriesSlice])
    return (
        <div className={s.back}>
            <div>
                <img src={country?.flags.png} alt="" />
                <h2>RU:{country?.translations.rus.official}</h2>
                <h2>EN:{country?.name.official}</h2>
                <h2>Столица:{country?.capital}</h2>
                <h2>Континент:{country?.continents}</h2>
                <h2>Абревиатура:{country?.fifa}</h2>
            </div>


        </div>
    );
};

export default Detailview;