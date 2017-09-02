package com.myself.acceptors.basic.impl;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.myself.acceptors.AbstractBasicAcceptor;
import com.myself.acceptors.BusinessResult;
import com.myself.acceptors.basic.IBookAcceptor;
import com.myself.busiobj.AbsBusinessObj;
import com.myself.exception.CustomException;
import com.myself.persistences.entity.basic.Book;

@Service(value = "bookAcceptor")
@Scope(value = "prototype")
public class BookAcceptor extends AbstractBasicAcceptor<Book> implements IBookAcceptor {

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public BusinessResult creates(AbsBusinessObj<Book> absBusinessObj) throws CustomException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public BusinessResult modifies(AbsBusinessObj<Book> absBusinessObj) throws CustomException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public BusinessResult deletes(AbsBusinessObj<Book> absBusinessObj) throws CustomException {
		// TODO Auto-generated method stub
		return null;
	}

}
