import React from 'react';

import { CardHeader, CardBody } from './styles';
import ClayCard from '@clayui/card';
import { MdStarBorder /*, MdStar */ } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import ClayLabel from '@clayui/label';
const Card: React.FC = () => {
  return (
    <div className="fluid">
      <ClayCard className="max-width">
        <CardHeader>
          <section>
            <img src={logo} width={40} height={40} />
            <h4>liferay/liferay-portal</h4>
          </section>
          <section id="btn-section">
            <button type="button" onClick={() => console.log('start clicked')}>
              <MdStarBorder size={23} color="#6B6C7E" />
            </button>
            <button type="button" onClick={() => console.log('Trash clicked')}>
              <FiTrash2 size={20} color="#6B6C7E" />
            </button>
          </section>
        </CardHeader>
        <CardBody>
          <ul>
            <li>
              <p>
                Stars <span>150</span>
              </p>
            </li>

            <li>
              <p>
                Forks <span>442</span>
              </p>
            </li>

            <li>
              <p>
                Open Issues <span>0</span>
              </p>
            </li>
            <li>
              <p>
                Age <span>11 years ago</span>
              </p>
            </li>
            <li>
              <p>
                Last commit <span>7 hours ago</span>
              </p>
            </li>
            <li>
              <p>
                License <span>N/A</span>
              </p>
            </li>
            <li>
              <ClayLabel displayType="warning">JAVA</ClayLabel>
            </li>
          </ul>
        </CardBody>
      </ClayCard>
    </div>
  );
};

export default Card;
