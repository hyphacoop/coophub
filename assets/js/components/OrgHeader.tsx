import React from 'react';
// @TODO [#22] Disabled because it breaks assets prod deploy with: npm run deploy
//import GitHubButton from 'react-github-btn';
import {Container, ButtonGroup, Button, CardLink, Row} from "reactstrap";
import {GoLocation, GoLink, GoMail, IoMdCalendar} from "react-icons/all";
import {Org} from "../types";
import {HorizontalBar} from 'react-chartjs-2'
import LanguagesProgressBar from './LanguagesProgressBar';

const OrgHeader:React.FC<{org: Org, maxLanguages: number}> = ({org, maxLanguages}) => {
    const orgDate = new Date(org.created_at);
    const createdDate = `${orgDate.toLocaleString('en', { month: 'long' })} ${orgDate.getFullYear()}`
    
    return (
        
        <Container>
            <div className="title-box text-center mt-5 org-header">
                <img src={org.avatar_url} alt="" className="center-block rounded-circle b-shadow-a avatar_coop"/>
                <h3 className="title-a mt-4">
                {org.name}
                </h3>
                <p className="subtitle-a">
                {org.description}
                </p>
                <div className="line-mf mb-3"/>
                <div className="skill-mf">
                    <Row>
                        <LanguagesProgressBar languages={org.languages} maxLanguages={maxLanguages}></LanguagesProgressBar>
                    </Row>
                </div>
                <ButtonGroup>
                    {org.location &&
                        <span>
                            <GoLocation/> { org.location }
                        </span>
                    }
                    {org.email &&
                        <span className="ml-4">
                            <GoMail/> { org.email }
                        </span>
                    }
                    {org.blog &&
                        <Button color="link" className="ml-4 pt-0">
                            <CardLink href={org.blog}> 
                                <GoLink/> { org.blog }
                            </CardLink>
                        </Button>
                    }
                    <span className="ml-4">
                        <IoMdCalendar />
                        Created in {createdDate}
                    </span>
                </ButtonGroup>
                {/* <br/>
                <p className="mt-2">
                    <GitHubButton  href={"https://github.com/" + org.login} data-size="large"
                                data-show-count
                                aria-label={"Follow @ " + org.login + " on GitHub"}>
                    Follow @{org.login}
                    </GitHubButton>
                </p> */}
            </div>
            
            
        </Container>
        
    );
};

export default OrgHeader;