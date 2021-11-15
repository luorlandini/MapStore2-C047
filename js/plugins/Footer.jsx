/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Nav,  NavItem} from 'react-bootstrap';
import src from "../../assets/img/CM-LOGO_HORIZONTAL_OPTION-A.jpg";
import HTML from '@mapstore/components/I18N/HTML';

/**
 * Footer plugin, section of the homepage.
 * description of footer can be overridden by
 * `home.footerDescription` message id in the translations
 * @prop {object} cfg.logo logo data to change image and href, set to null to hide the logo
 * @prop {object} cfg.logo.src source of the logo
 * @prop {object} cfg.logo.width width of the logo image
 * @prop {object} cfg.logo.height height of the logo image
 * @prop {object} cfg.logo.title title of the logo image
 * @prop {object} cfg.logo.alt alternative text of the logo image
 * @memberof plugins
 * @class
 * @name Footer
 */

class Footer extends React.Component {

    static propTypes = {
        logo: PropTypes.object,
        additionalInformation: PropTypes.array
    };

    static defaultProps = {
        logo: {
            src,
            width: 140,
            height: 'auto',
            href: 'https://www.google.com/',
            title: 'GeoSolutions',
            alt: 'GeoSolutions'
        },
        additionalInformationOnLeft: [
            {
                href: ' https://www.clevelandmetroparks.com/I',
                text: 'Website',
                icon: 'fa-window-maximize'
            },
            {
                href: 'https://www.clevelandmetroparks.com/about/recreation/trail-park-maps',
                text: 'Trail and Park',
                icon: 'fa-map'
            }
        ],
        additionalInformationOnRight: [
            {
                href: 'https://www.facebook.com/ClevelandMetroparks/',
                text: 'Facebook',
                icon: 'fa-facebook'
            },
            {
                href: 'https://maps.cmparks.net/geoserver/www/printing/index.html',
                text: 'Legacy GIS print',
                icon: 'fa-print'
            }
        ]

    };

    render() {
        const { href, ...logo } = this.props.logo || {};
        const { additionalInformationOnLeft, additionalInformationOnRight } = this.props || {};
        const image = (
            <img
                src={logo.src}
                width={logo.width || 'auto'}
                height={logo.height || 'auto'}
                title={logo.title || ''}
                alt={logo.alt || ''} />
        );
        return (
            <>
                <Grid>
                    <Row>
                        <Col className="text-center">
                            <h1><HTML msgId="home.additionalInformation"/></h1>
                        </Col>
                    </Row>
                    <Row className="external-link" >

                        <Col xs={12} className="text-center">
                            <Col xs={6}>
                                <Nav bsStyle="pills" stacked >
                                    {
                                        additionalInformationOnLeft.map((item, index) => {
                                            return (<NavItem eventKey={index} href={item.href}>
                                                { item.icon ? <i className={`fa ${item.icon}`} aria-hidden="true"></i> : '' } { ' ' } {item.text}
                                            </NavItem>);
                                        })
                                    }
                                </Nav>
                            </Col>
                            <Col xs={6}>
                                <Nav bsStyle="pills" stacked >
                                    {
                                        additionalInformationOnRight.map((item, index) => {
                                            return (<NavItem eventKey={index} href={item.href}>
                                                { item.icon ? <i className={`fa ${item.icon}`} aria-hidden="true"></i> : '' } { ' ' }  {item.text}
                                            </NavItem>);
                                        })
                                    }
                                </Nav>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    {logo && logo.src && <Row>
                        <Col xs={12} className="text-center">
                        </Col>
                    </Row>}
                    <Row>
                        <Col xs={12} className="text-center">
                            <Col xs={6} className="text-center">
                                <div>
                                    {href ? <a target="_blank" href={href}>
                                        {image}
                                    </a> : image}
                                </div>
                            </Col>
                            <Col xs={6} className="text-center footer-description">
                                <HTML msgId="home.footerDescription"/>
                            </Col>

                        </Col>
                    </Row>
                </Grid>
            </>
        );
    }
}

export const FooterPlugin = {
    FooterPlugin: Footer
};
