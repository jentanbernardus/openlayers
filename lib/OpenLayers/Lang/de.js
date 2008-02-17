/* Copyright (c) 2006-2008 MetaCarta, Inc., published under the Clear BSD
 * license.  See http://svn.openlayers.org/trunk/openlayers/license.txt for the
 * full text of the license. */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["de"]
 * Dictionary for German.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang.de = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "Unbehandelte Anfrager�ckmeldung ${statusText}",

    'permalink': "Permalink",

    'overlays': "Overlays",

    'baseLayer': "Grundkarte",

    'sameProjection':
        "Die �bersichtskarte funktioniert nur, wenn sie dieselbe Projektion wie die Hauptkarte verwendet",

    'readNotImplemented': "Lesen nicht implementiert.",

    'writeNotImplemented': "Schreiben nicht implementiert.",

    'noFID': "Ein Feature, f�r das keine FID existiert, kann nicht aktualisiert werden.",

    'errorLoadingGML': "Fehler beim Laden der GML-Datei ${url}",

    'browserNotSupported':
        "Ihr Browser unterst�tzt keine Vektordarstellung. Aktuell unterst�tzte Renderer:\n${renderers}",

    'componentShouldBe': "addFeatures : Komponente sollte vom Typ ${geomType} sein",

    'commitSuccess': "WFS-Transaktion: ERFOLGREICH ${response}",

    'commitFailed': "WFS-Transaktion: FEHLGESCHLAGEN ${response}",

    'googleWarning':
        "Der Google-Layer konnte nicht korrekt geladen werden.<br><br>" +
        "Um diese Meldung nicht mehr zu erhalten, w�hlen Sie einen anderen " +
        "Hintergrundlayer aus dem LayerSwitcher in der rechten oberen Ecke.<br><br>" +
        "Sehr wahrscheinlich tritt dieser Fehler auf, weil das Skript der " +
        "Google-Maps-Bibliothek nicht eingebunden wurde oder keinen g�ltigen " +
        "API-Schl�ssel f�r Ihre URL enth�lt.<br><br>" +
        "Entwickler: F�r Hilfe zum korrekten Einbinden des Google-Layers " +
        "<a href='http://trac.openlayers.org/wiki/Google' " +
        "target='_blank'>hier klicken</a>",

    'getLayerWarning':
        "Der ${layerType}-Layer konnte nicht korrekt geladen werden.<br><br>" +
        "Um diese Meldung nicht mehr zu erhalten, w�hlen Sie einen anderen " +
        "Hintergrundlayer aus dem LayerSwitcher in der rechten oberen Ecke.<br><br>" +
        "Sehr wahrscheinlich tritt dieser Fehler auf, weil das Skript der " +
        '"${layerLib}"-Bibliothek nicht eingebunden wurde.<br><br>' +
        "Entwickler: F�r Hilfe zum korrekten Einbinden von Layern " +
        "<a href='http://trac.openlayers.org/wiki/${layerLib}' " +
        "target='_blank'>hier klicken</a>",

    'scale': "Ma�stab = 1 : ${scaleDenom}",

    'end': ''
}, OpenLayers.Lang["en"]);