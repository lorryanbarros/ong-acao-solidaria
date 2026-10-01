// js/storage.js

const KEYS = {
  VOLUNTEERS: 'ong_acao_solidaria_voluntarios'
};

export const Storage = {
  getVolunteers() {
    return JSON.parse(localStorage.getItem(KEYS.VOLUNTEERS) || '[]');
  },

  saveVolunteer(volunteer) {
    const volunteers = this.getVolunteers();
    const newRecord = {
      ...volunteer,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    volunteers.push(newRecord);
    localStorage.setItem(KEYS.VOLUNTEERS, JSON.stringify(volunteers));
    return newRecord;
  }
};