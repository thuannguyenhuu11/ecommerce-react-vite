import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import cls from 'classnames';
import { useContext } from 'react';

const Filter = () => {
    const { containerFilter, boxIcon, boxLeft, selectBox, show, sort } = styles;

    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                <select className={cls(selectBox, sort)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>

                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{ fontSize: '25px', cursor: 'pointer' }}
                    />

                    <div
                        style={{
                            height: '20px',
                            width: '1px',
                            backgroundColor: '#e1e1e1'
                        }}
                    />

                    <CiCircleList
                        style={{ fontSize: '25px', cursor: 'pointer' }}
                    />
                </div>
            </div>

            <div className={boxLeft}>
                <div
                    style={{
                        fontSize: '14px',
                        color: '#555'
                    }}
                >
                    Show
                </div>

                <select className={cls(selectBox)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
