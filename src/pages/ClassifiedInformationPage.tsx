import {GameLogo} from "../components/GameLogo.tsx";
import {DossierPanel} from "../components/DossierPanel.tsx";
import type {NavigationProps} from "../Types/Navigation.ts";
import React from "react";
import {StampButton} from "../components/StampButton.tsx";

export function ClassifiedInformationPage({ onNavigate }: NavigationProps) {
    
    return (
        <main style={page}>
            <GameLogo />

            <DossierPanel>
                <div style={classifiedStamp}>
                   HIGHLY CONFIDENTIAL
                </div>

                <div style={header}>
                    <span>TO MY BEST FRIENDS</span>
                    <span>FORM NSKY</span>
                </div>

                <div style={divider}/>

                <h1 style={title}>
                    THANKS FOR EVERYTHING!
                </h1>

                <p style={description}>
                    Naar mijn goede vrienden.
                    Ik wil jullie bedanken voor alles wat ik heb mogen meemaken in de afgelopen jaren met jullie .<br/>
                    Ik heb jullie leren kennen op een periode in mijn leven waarin ik veel onzeker was en geen idee had
                    wat ik wilde doen en hoop had in mijn toekomst. <br/>
                    ik heb in die best moeilijke tijd van mijn leven jullie mogen leren kennen en ik ben jullie daar
                    ontzettend dankbaar voor. <br/>
                    Jullie hebben mij niet alleen geholpen om nieuwe vrienden te maken, maar ook echt te laten zien wie
                    ik ben en wie ik wil zijn. <br/>
                    Jullie hebben mij geholpen om mijn eigen pad te vinden en mijn eigen keuzes te maken. Het is niet
                    altijd gemakkelijk geweest, maar door jullie steun, kon ik er altijd weer bovenop komen. <br/>
                    ik ben jullie ontzettend dankbaar voor alles wat jullie voor mij hebben gedaan en ik hoop dat ik
                    jullie ooit kan terugbetalen voor alles wat jullie voor mij hebben gedaan. <br/>
                    Ik hoop dat jullie weten dat ik altijd voor jullie klaar zal staan, net zoals jullie altijd voor mij
                    klaar hebben gestaan. <br/>
                    <br/>

                    Bedankt voor alles en ik hoop dat we nog veel mooie herinneringen samen mogen maken in de
                    toekomst. <br/>

                    <strong>With kind regards</strong><br/>
                    <strong>NSKY</strong>
                </p>
                
                <div style={divider}></div>
                
                <StampButton
                    onClick={() => onNavigate('join')}
                >
                    RETURN TO LOBBY
                </StampButton>
                

            </DossierPanel>
        </main>
    )
}

const page: React.CSSProperties = {
    width: '100%',
    minHeight: '100dvh',

    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '32px 20px',

    background: 'var(--paper-dark)',
    color: 'var(--ink)',

    fontFamily: 'var(--mono)',
};

const classifiedStamp: React.CSSProperties = {
    display: 'inline-block',

    border: '2px solid var(--red)',
    color: 'var(--red)',

    padding: '5px 9px',

    fontSize: '11px',
    fontWeight: 'bold',
    letterSpacing: '1.5px',

    transform: 'rotate(-2deg)',

    marginBottom: '16px',
};

const header: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',

    fontSize: '10px',

    color: 'var(--ink-muted)',
    letterSpacing: '0.5px',
};

const divider: React.CSSProperties = {
    borderTop: '1px dashed var(--red)',

    margin: '10px 0 18px',
};

const title: React.CSSProperties = {
    margin: 0,

    fontSize: '26px',
    lineHeight: '1.2',

    letterSpacing: '1.5px',
    fontWeight: 'bold',

    color: 'var(--ink)',
};

const description: React.CSSProperties = {
    fontSize: '14px',
    lineHeight: '1.6',

    color: 'var(--ink-light)',

    margin: '12px 0 24px',
};