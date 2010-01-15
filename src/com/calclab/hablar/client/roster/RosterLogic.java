package com.calclab.hablar.client.roster;

import java.util.Collection;
import java.util.HashMap;

import com.calclab.emite.core.client.xmpp.session.Session;
import com.calclab.emite.core.client.xmpp.session.Session.State;
import com.calclab.emite.core.client.xmpp.stanzas.XmppURI;
import com.calclab.emite.im.client.chat.ChatManager;
import com.calclab.emite.im.client.roster.Roster;
import com.calclab.emite.im.client.roster.RosterItem;
import com.calclab.suco.client.Suco;
import com.calclab.suco.client.events.Listener;
import com.google.gwt.core.client.GWT;

public class RosterLogic {

    private final Roster roster;
    private final ChatManager chatManager;
    private final HashMap<XmppURI, RosterItemView> items;
    private final RosterView view;
    private boolean active;

    public RosterLogic(final RosterView view) {
	this.view = view;
	this.roster = Suco.get(Roster.class);
	this.items = new HashMap<XmppURI, RosterItemView>();
	this.chatManager = Suco.get(ChatManager.class);

	roster.onRosterRetrieved(new Listener<Collection<RosterItem>>() {
	    @Override
	    public void onEvent(Collection<RosterItem> items) {
		GWT.log("Retrieved roster", null);
		for (RosterItem item : items) {
		    getOrCreateWidget(item);
		}
	    }

	});

	roster.onItemAdded(new Listener<RosterItem>() {
	    @Override
	    public void onEvent(RosterItem item) {
		getOrCreateWidget(item);
		view.setStatusMessage(item.getName() + " has been added to roster.");
	    }
	});

	roster.onItemChanged(new Listener<RosterItem>() {
	    @Override
	    public void onEvent(RosterItem item) {
		getOrCreateWidget(item);
	    }
	});

	Session session = Suco.get(Session.class);
	session.onStateChanged(new Listener<Session>() {
	    @Override
	    public void onEvent(Session session) {
		boolean isActive = session.getState() == State.ready;
		if (active != isActive) {
		    active = isActive;
		    view.setActive(isActive);
		}
	    }
	});

	this.active = session.getState() == State.ready;
	view.setActive(active);
    }

    public void onItemClick(RosterItem item) {
	chatManager.open(item.getJID());
    }

    public void openChat(XmppURI uri) {
	chatManager.open(uri);
    }

    /**
     * Returns a roster item view ALWAYS
     * 
     * @param item
     * @return
     */
    RosterItemView getOrCreateWidget(RosterItem item) {
	RosterItemView itemWidget = items.get(item.getJID());
	if (itemWidget == null) {
	    itemWidget = view.createItemView();
	    items.put(item.getJID(), itemWidget);
	}
	RosterItemLogic.setItem(item, itemWidget);
	return itemWidget;
    }

}
