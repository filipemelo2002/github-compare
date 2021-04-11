import React from 'react';

import { CardHeader, CardBody } from './styles';
import ClayCard from '@clayui/card';
import { MdStarBorder /*, MdStar */ } from 'react-icons/md';
import logo from '../../assets/logo.png';
import ClayLabel from '@clayui/label';
import DeleteModal from '../DeleteModal';

const Card: React.FC = () => {
  return (
    <div className="col-md-3">
      <ClayCard>
        <CardHeader>
          <section>
            <img src={logo} width={40} height={40} />
            <h4>liferay/liferay-portal</h4>
          </section>
          <section>
            <button type="button" onClick={() => console.log('start clicked')}>
              <MdStarBorder size={23} color="#6B6C7E" />
            </button>
            <DeleteModal />
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
              <ClayLabel displayType="warning">JAVASCRIPT</ClayLabel>
            </li>
          </ul>
        </CardBody>
      </ClayCard>
    </div>
  );
};

export default Card;
