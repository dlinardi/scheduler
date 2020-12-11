export default function getAppointmentsForDay(state, day) {
  let appointments = []
  const results = [];
  
  state.days.forEach((days) => {
    if (days.name === day) {
      appointments = days.appointments;
    }
  })

  appointments.forEach((appointment) => {
    for (const key in state.appointments) {
      if (appointment === state.appointments[key].id) {
        results.push(state.appointments[key]);
      }
    }
  });

  return results;
}