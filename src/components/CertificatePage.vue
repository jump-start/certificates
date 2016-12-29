<template>
  <div>
    <h1 class="ui header">
      {{certificate.name}}
      <img class="ui image" src="https://www.scrum.org/Portals/_default/Skins/Scrum/images/badges/psm1-large.png">
    </h1>

    <h2 class="ui sub header">
      Certification Body
    </h2>
    <span>{{certificate.certificationBody}}</span>

    <h2 class="ui sub header">
      Assessment
    </h2>
    <span>{{certificate.assessment.type}}</span>
    <span v-if="certificate.assessment.location"> at {{certificate.assessment.location}}</span>

    <h2 class="ui sub header">
      Price
    </h2>
    <span>{{certificate.cost.currency + certificate.cost.amount}}</span>

    <h2 class="ui sub header">
      Description
    </h2>
    <p>
      {{certificate.description}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'certificatePage',
    data() {
      return {
        certificate: {
          name: 'Professional Scrum Master (PSM) I',
          description: 'People who have passed PSM I achieve certification, and demonstrate a fundamental level of Scrum mastery.  PSM I certificate holders prove they understand Scrum as described in the Scrum Guide and concepts for applying it.  PSM I holders have a consistent terminology and approach to Scrum.',
          certificationBody: 'scrum.org',
          assessment: {
            type: 'Online Exam'
          },
          cost: {
            currency: '$',
            amount: '150'
          }
        }
      };
    }
  };
</script>
