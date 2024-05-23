import React, { FC, useEffect } from 'react';
import s from './Home.module.scss'
import { useAppDispatch, useAppSelector } from '../../Store/Hooks/hooks';
import { fetchByContries } from '../../Store/Slice/countriesSlice';
import { Link } from 'react-router-dom';
const Home: FC = () => {

    const dispatch = useAppDispatch()
    const { countriesSlice, error, loading } = useAppSelector(state => state.countries)
    useEffect(() => {
        dispatch(fetchByContries())
    }, [dispatch])
    console.log();


    return (
        <section className={s.backround}>
            <div className={s.display}>
                {
                    countriesSlice.map((el, i) => (
                        <div key={i} className={s.card}>
                            <div className={s.bg}>
                                <img src={el.flags.png} alt="" />
                                <h1>{el.translations.rus.official}</h1>
                                <Link to={`/detailview/${el.name.common}`}>
                                    <p>Подробнее...</p>
                                </Link></div>
                            <div className={s.blob}></div>
                        </div>

                    ))
                }
            </div>
        </section>
    );
};

export default Home;