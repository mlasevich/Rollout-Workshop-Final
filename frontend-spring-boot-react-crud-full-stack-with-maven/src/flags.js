//import Rox from 'rox-react-native';
import Rox from 'rox-browser';

const Flags = {
	addFlag: new Rox.Flag()
}

Rox.register('default', Flags);
Rox.setup('INSERT ROLLOUT KEY HERE', {
  debugLevel: 'verbose'
});
export default Flags;
