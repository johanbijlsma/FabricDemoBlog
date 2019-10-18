import React from 'react';

export interface BlogProps {
	// Fill in props here
	title: 'My first Blog post';
	author: 'Johan Bijlsma';
	lead: 'In de afgelopen jaren zijn er een aantal Frameworks opgestaan, die binnen de front-end wereld veel worden gebruikt. Deze keer heb ik het niet zozeer over JavaScript frameworks, maar meer libraries  voor de gehele front-end. Grote namen in dit spectrum zijn Bootstrap, en Material. Maar Microsoft heeft ook zijn eigen framework: Microsoft Fabric. ';
	body: `Ook heeft Microsoft een Design System dat goed samen gaat met Fabric: **Microsoft Fluent**. In dit Design System staan de styling guidelines uitgewerkt, en hiermee krijgen je applicaties de herkenbare *look-and-feel* van Office365.

Maar wat maakt deze nou anders dan de eerder genoemde: In deze blog zet ik de mogelijkheden en de verschillen uit een.
Voor de leesbaarheid zal ik Microsoft Fluent voortaan "Fluent" noemen, en Microsoft Fabric "Fabric", in de rest van deze blog.

## Onbekend, maar herkenbaar

Iedereen die de laatste jaren met Office 365, of Sharepoint heeft gewerkt, of de sites van Microsoft heeft bezocht zal de style herkenen, en niet voor niets. Microsoft is de laatste jaren aan het streven naar hogere consistentie in de *look-and-feel* van hun software en websites. Hierdoor is de style van Fluent direct herkenbaar als *clean* en rustig, met een duidelijke verbinding met Microsoft.


## Hoe kun je Fabric gebruiken?

Fabric is er voor diverse architecturen:

- Windows
- ios
- Android
- Web

Als front-end developer zal ik mij alleen richten op Web, en deze is op 2 verschillende manieren te gebruiken:

**Als Styleguide:** In deze versie download je een verzameling CSS bestanden, en kun je snel aan de slag met hety stylen van je website of applicatie. Deze methode is goed te vergeljken met Bootstrap.

**Fabric react:** Ook is het mogelijk om te starten met een React package. Als je hier voor kiest kun je direct beginnen met het bouwen van een nieuwe site of applicatie, met de *look-and-feel* van Fluent

## Het *Unique Selling Point* van Fluent en Fabric

Waar de combinatie Fluent en Fabric zichzelf in onderscheiden is dat het de default is voor het bouwen van een custom front-end voor systemen als Sharepoint, en daarmee is het een mooie brug tussen corporate en Open Source; React is tenslotte één van de populairste JavaScript frameworks van dit moment.

En door het volgen van de Style guide en design voorschriften van Fluent mogelijk om bestaande bedrijfssoftware uit te breiden met goed gestylede, vloeiende applicaties voor andere bedrijfsdoelen, of voor nieuwe functies, gebouwd in Fabric React.

## Demo -  een voorbeeld in Fabric React

Als voorbereiding voor deze blog, heb ik zelf een demo gebouwd in Fabric React.`;
}

export const Blog = (props: BlogProps) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<p>door: {props.author}</p>
			<p className='ms-fontWeight-semibold'>{props.lead}</p>
			<article>{props.body}</article>
		</div>
	);
};
