import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { Box, DollarSign, Grid, MapPin, Menu } from 'react-feather';

const Title = styled.h5`
  line-height: 1.4;
`;

const CardText = styled.p`
  margin-top: 15px;
  line-height: 1.4;
`;

function getId(url = '') {
  return url.match(/rent-detail-(\d+).html/)[1] || '';
}

function getPhotoUrl(id) {
  if (typeof window === 'undefined') return '';
  return window.matchMedia('(orientation: portrait)').matches
    ? `https://m.591.com.tw/v2/rent/photo/${id}/0`
    : '';
}

function Photos({ rentUrl }) {
  const photoUrl = getPhotoUrl(getId(rentUrl));
  return photoUrl ? (
    <iframe
      style={{ width: '100%' }}
      height="480"
      src={photoUrl}
      referrerPolicy="no-referrer"
      sandbox
    />
  ) : null;
}

const RentInfoList = ({ data }) => {
  const flattenData = [].concat(...data);
  const rentInfos = Object.entries(flattenData).map((rent, index) => (
    <div className="col-md-4" key={index}>
      <div className="card border-secondary mb-3">
        <div className="card-body">
          <Photos rentUrl={rent[1].url} />
          <Title className="card-title">{rent[1].title}</Title>
          <CardText className="card-text">
            <MapPin size={16} /> {rent[1].address}
          </CardText>
          <CardText className="card-text">
            <DollarSign size={16} /> 價格：
            {rent[1].price}
          </CardText>
          <CardText className="card-text">
            <Menu size={16} /> {rent[1].floor}
          </CardText>
          <CardText className="card-text">
            <Box size={16} /> 類型：
            {rent[1].optionType}
          </CardText>
          <CardText className="card-text">
            <Box size={16} /> 房數：
            {rent[1].rentType}
          </CardText>
          <CardText className="card-text">
            <Grid size={16} /> 坪數：
            {rent[1].ping} 坪
          </CardText>
          <div className="float-right">
            <a
              className="btn btn-primary"
              href={rent[1].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              點此前往
            </a>
          </div>
          <ReactTooltip />
        </div>
      </div>
    </div>
  ));

  return rentInfos;
};

export default RentInfoList;
