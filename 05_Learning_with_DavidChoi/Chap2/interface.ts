//creating an instance by instantiating an object literal called linda, setting the 2 field names "name" and "id" and then implementing the getUniqueId function.

//both examples has different implementations. Interface allows for a single structure across objects but to enable different implementations. Strict rules but allow some flexibility in terms of how functions go about doing their work.

interface Employee {
  name: string;
  id: number;
  isManager: boolean;
  getUniqueId: () => string;
}

const linda: Employee = {
  name: 'linda',
  id: 2,
  isManager: false,
  getUniqueId: (): string => {
    let uniqueId = linda.id + '-' + linda.name;
    if (!linda.isManager) {
      return 'emp-' + uniqueId;
    }
    return uniqueId;
  },
};

console.log(linda.getUniqueId());
const pam: Employee = {
  name: 'pam',
  id: 1,
  isManager: true,
  getUniqueId: (): string => {
    let uniqueId = pam.id + '-' + pam.name;
    if (pam.isManager) {
      return 'mgr-' + uniqueId;
    }
    return uniqueId;
  },
};

console.log(pam.getUniqueId());
