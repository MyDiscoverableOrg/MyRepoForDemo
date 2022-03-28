import React, { useState } from 'react';
import { Typography } from 'antd';
// import { CheckOutlined, HighlightOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons';
import './ProfilePageContent.css';

const { Paragraph } = Typography;

const ProfilePageContent = () => {
  const [editableIntroductionStr, setEditableIntroductionStr] = useState('This is an editable text.');
  const [editableExperienceStr, setEditableExperienceStr] = useState('This is an editable text.');
  const [editableTeamStr, setEditableTeamStr] = useState('This is an editable text.');
  const [editableSkillsStr, setEditableSkillsStr] = useState('This is an editable text.');
  const [editableInterestsStr, setEditableInterestsStr] = useState('This is an editable text.');
  const [editableCertificationsStr, setEditableCertificationsStr] = useState('This is an editable text.');
  const [editableLocationStr, setEditableLocationStr] = useState('This is an editable text.');
  const [editableFunFactsStr, setEditableFunFactsStr] = useState('This is an editable text.');

  return (
    <div className="profileContentForm">
        <h1>Profile</h1>
        <div>
            <h3>Introduction</h3>
            <Paragraph style={{padding: 15}} editable={{ onChange: setEditableIntroductionStr }}>{editableIntroductionStr}</Paragraph>
        </div>
        <div>
            <h3>Experience</h3>
            <Paragraph style={{padding: 15}} editable={{ onChange: setEditableExperienceStr }}>{editableExperienceStr}</Paragraph>
        </div>
        <div>
            <h3>Team</h3>
            <Paragraph style={{padding: 15}} editable={{ onChange: setEditableTeamStr }}>{editableTeamStr}</Paragraph>
        </div>
        <div>
            <h3>Skill(s)</h3>
            <Paragraph style={{padding: 15}} editable={{ onChange: setEditableSkillsStr }}>{editableSkillsStr}</Paragraph>
        </div>
        <div>
            <h3>Interest(s)</h3>
            <Paragraph style={{padding: 15}} editable={{ onChange: setEditableInterestsStr }}>{editableInterestsStr}</Paragraph>
        </div>
        <div>
            <h3>Certification(s)</h3>
            <Paragraph style={{padding: 15}} editable={{ onChange: setEditableCertificationsStr }}>{editableCertificationsStr}</Paragraph>
        </div>
        <div>
            <h3>Location</h3>
            <Paragraph style={{padding: 15}} editable={{ onChange: setEditableLocationStr }}>{editableLocationStr}</Paragraph>
        </div>
        <div>
            <h3>Fun fact(s)</h3>
            <Paragraph style={{padding: 15}} editable={{ onChange: setEditableFunFactsStr }}>{editableFunFactsStr}</Paragraph>
        </div>
    </div>
  );
};

export default ProfilePageContent