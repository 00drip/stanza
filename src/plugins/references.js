import { Namespaces } from '../protocol';


export default function (client) {

    client.disco.addFeature(Namespaces.REFERENCE_0);
}
