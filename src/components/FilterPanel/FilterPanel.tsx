import React from 'react'
import {Dropdown, Button} from 'react-bootstrap'

import RangeTwoValues from '../Range/RangeTwoValues'

import './filterPanel.sass'


const FilterPanel: React.FC = () => {
  return (
    <div className='filter-panel'>
        <Dropdown className="mt-3 mb-3 filter-panel__rooms">
            <Dropdown.Toggle variant={"outline-secondary"}>Регион</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item >
                    {/* // onClick={() => setReaction(true)}> */}
                        Московский
                </Dropdown.Item>
                <Dropdown.Item >
                    {/* // onClick={() => setReaction(false)}> */}
                        Питерский
                </Dropdown.Item>
                <Dropdown.Item >
                    {/* // onClick={() => setReaction(false)}> */}
                        Любой
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <div className="filter-panel__checks">
            <div className="filter-panel__checks_type">
                <input type="checkbox" id="check-first" />
                <label htmlFor="check-first">Новостройка</label>
                <input type="checkbox" id="check-second" />
                <label htmlFor="check-second">Вторичка</label>
            </div>
            <div className="filter-panel__checks_rooms">
                <input type="checkbox" id="checkS" />
                <label htmlFor="checkS">Студия</label>
                <input type="checkbox" id="check1" />
                <label htmlFor="check1">1</label>
                <input type="checkbox" id="check2" />
                <label htmlFor="check2">2</label>
                <input type="checkbox" id="check3" />
                <label htmlFor="check3">3</label>
                <input type="checkbox" id="check4" />
                <label htmlFor="check4">4+</label>
            </div>
        </div>
        <div className="filter-panel__range">
            <RangeTwoValues title='Цена, руб.' min={50000} max={50000000} step={10000} gap={10000} />
            <RangeTwoValues title='Площадь, м2' min={10} max={350} step={5} gap={5} />
            <RangeTwoValues title='Этаж' min={1} max={33} step={1} gap={0} />
        </div>
        <Button variant='outline-warning' className="filter-panel__btn">Показать</Button>
    </div>
  )
}

export default FilterPanel