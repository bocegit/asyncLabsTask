import { getAthletes } from '../model/athletes'
import spinner from '../components/spinner/loadingContent'

const renderAthletes = async (target) => {
  const spinElement = spinner(target);
  const athletesData = await getAthletes();
  spinElement.remove();

  if (athletesData.status === 'success') {
    athletesData.data.forEach((v) => {
      const athBox = document.createElement('athlete-box');
      athBox.boxData = v;
      target.appendChild(athBox);
    });
  } else showError(athletesData.data);
}

export { renderAthletes };